import { useLayoutEffect, useRef, useCallback, useState, useEffect } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const cardLayoutsRef = useRef([]); // Cached layout values
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
      };
    }
  }, [useWindowScroll]);

  const measureLayout = useCallback(() => {
    if (!cardsRef.current.length) return;

    const { scrollTop } = getScrollData();
    
    // Measure cards
    const layouts = cardsRef.current.map((card) => {
      if (!card) return { top: 0 };
      // getBoundingClientRect().top is relative to viewport. 
      // Add scrollTop to get absolute document top.
      const rect = card.getBoundingClientRect();
      return { top: rect.top + window.scrollY };
    });

    // Measure end element
    const endElement = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scrollerRef.current?.querySelector('.scroll-stack-end');
    
    let endElementTop = 0;
    if (endElement) {
      const rect = endElement.getBoundingClientRect();
      endElementTop = rect.top + window.scrollY;
    }

    cardLayoutsRef.current = {
      cards: layouts,
      endElementTop
    };
  }, [getScrollData, useWindowScroll]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || !cardLayoutsRef.current.cards || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const layouts = cardLayoutsRef.current;
    
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElementTop = layouts.endElementTop;

    // We pre-calculate topCardIndex once for blur logic
    let topCardIndex = -1;
    if (blurAmount) {
      for (let j = 0; j < layouts.cards.length; j++) {
        const jCardTop = layouts.cards[j].top;
        const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
        if (scrollTop >= jTriggerStart) {
          topCardIndex = j;
        } else {
          break; // Optimization: they are in order
        }
      }
    }

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = layouts.cards[i].top;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount && i < topCardIndex) {
        blur = Math.max(0, (topCardIndex - i) * blurAmount);
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: translateY,
        scale: scale,
        rotation: rotation,
        blur: blur
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.01 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.0001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.01 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.01;

      if (hasChanged) {
        card.style.transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg) translateZ(0)`;
        if (blurAmount) {
          card.style.filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';
        }
        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
  ]);

  const handleScroll = useCallback(() => {
    // Execute immediately on Lenis scroll event to stay perfectly in sync
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    const options = {
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075
    };

    if (!useWindowScroll) {
      options.wrapper = scrollerRef.current;
      options.content = scrollerRef.current?.querySelector('.scroll-stack-inner');
      options.gestureOrientationHandler = true;
      options.normalizeWheel = true;
      options.touchInertiaMultiplier = 35;
      options.touchInertia = 0.6;
    }

    const lenis = new Lenis(options);
    lenis.on('scroll', handleScroll);

    const raf = time => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenisRef.current = lenis;
    return lenis;
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    const measureAndInit = () => {
      const cards = Array.from(
        useWindowScroll
          ? document.querySelectorAll('.scroll-stack-card')
          : scrollerRef.current?.querySelectorAll('.scroll-stack-card') || []
      );

      if (!cards.length) return;
      cardsRef.current = cards;

      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          card.style.marginBottom = `${itemDistance}px`;
        }
        card.style.willChange = 'transform, filter';
        card.style.transformOrigin = 'top center';
        card.style.backfaceVisibility = 'hidden';
      });

      measureLayout();
      setupLenis();
      updateCardTransforms();
    };

    // Ensure we measure after layout is truly stable
    const timer = setTimeout(measureAndInit, 300);

    const handleResize = () => {
      measureLayout();
      updateCardTransforms();
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      lastTransformsRef.current.clear();
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    measureLayout,
    setupLenis,
    updateCardTransforms
  ]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
