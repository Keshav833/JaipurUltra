import { useEffect, useRef } from "react";

const routeCoords = [
  [26.95453, 75.84259], [26.95595, 75.84311], [26.95744, 75.84373], [26.95978, 75.84488], [26.96063, 75.84506],
  [26.96347, 75.84635], [26.96492, 75.84768], [26.96652, 75.84837], [26.96883, 75.84975], [26.97024, 75.85119],
  [26.97231, 75.85177], [26.97482, 75.85169], [26.97756, 75.85211], [26.98043, 75.85248], [26.98328, 75.85336],
  [26.98661, 75.85409], [26.98855, 75.85615], [26.98849, 75.85866], [26.98949, 75.86261], [26.99174, 75.8703],
  [26.99277, 75.87455], [26.99576, 75.8762], [27.00194, 75.87638], [27.00721, 75.87797], [27.01289, 75.87705],
  [27.01411, 75.87508], [27.01842, 75.87433], [27.02267, 75.86928], [27.02782, 75.87335], [27.03373, 75.87683],
  [27.03771, 75.88012], [27.03609, 75.88606], [27.0434, 75.89077], [27.05162, 75.88965], [27.06142, 75.88976],
  [27.06948, 75.89043], [27.07729, 75.89098], [27.08778, 75.88738], [27.09299, 75.88634], [27.09974, 75.89105],
  [27.10705, 75.89658], [27.11482, 75.90168], [27.1219, 75.90164], [27.12824, 75.89893], [27.13285, 75.90489],
  [27.13301, 75.91354], [27.14022, 75.91928], [27.13924, 75.93709], [27.14393, 75.94292], [27.14998, 75.94192],
  [27.15801, 75.93294], [27.17037, 75.91628], [27.18042, 75.91679], [27.17904, 75.91411], [27.17255, 75.91594],
  [27.16432, 75.92471], [27.15628, 75.93525], [27.14854, 75.9439], [27.14162, 75.94735], [27.13682, 75.94958],
  [27.13553, 75.95714], [27.13875, 75.96204], [27.14231, 75.9577], [27.14371, 75.95835],
];

const aidStations = [
  { km: 0, pos: [26.95453, 75.84259], label: "Start — Jal Mahal", note: "Race begins at the iconic lake palace", type: "start" },
  { km: 7, pos: [26.98104, 75.85254], label: "Aid Station 1 (~7 KM)", note: "Hydration · nutrition · first check", type: "aid" },
  { km: 14, pos: [27.02163, 75.87308], label: "Aid Station 2 (~14 KM)", note: "Route enters rural farmland", type: "aid" },
  { km: 21, pos: [27.06015, 75.89059], label: "Aid Station 3 (~21 KM)", note: "Village corridor stretch", type: "aid" },
  { km: 25, pos: [27.10035, 75.89157], label: "Turnaround (~25 KM)", note: "Midpoint — head back to Jal Mahal", type: "turn" },
  { km: 35, pos: [27.14021, 75.9246], label: "Aid Station 4 (~35 KM)", note: "Deep desert landscape section", type: "aid" },
  { km: 43, pos: [27.16085, 75.92864], label: "Aid Station 5 (~43 KM)", note: "Final major aid before finish", type: "aid" },
  { km: 50, pos: [27.14371, 75.95835], label: "Finish Line (~50 KM)", note: "You made it — Pink City glory!", type: "finish" },
];

export default function RouteMap({ isLightMode = false }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current || !window.L) return;

    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    const L = window.L;
    const map = L.map(mapContainerRef.current, {
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: true,
    });
    mapRef.current = map;

    const tileConfig = isLightMode
      ? {
          url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>',
          maxZoom: 18,
        }
      : {
          url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 20,
        };

    L.tileLayer(tileConfig.url, {
      attribution: tileConfig.attribution,
      maxZoom: tileConfig.maxZoom,
    }).addTo(map);

    const routeStatic = L.polyline(routeCoords, {
      color: "#E87722",
      weight: 5,
      opacity: 0,
      lineJoin: "round",
      lineCap: "round",
    }).addTo(map);

    map.fitBounds(routeStatic.getBounds(), { padding: [30, 30] });

    const animLine = L.polyline([], {
      color: "#E87722",
      weight: 5,
      opacity: 0.92,
      lineJoin: "round",
      lineCap: "round",
    }).addTo(map);

    const markerColors = {
      start: { fill: "#E87722", stroke: "#1A1A2E", r: 10 },
      aid: { fill: "#fff8f0", stroke: "#E87722", r: 7 },
      turn: { fill: "#1A1A2E", stroke: "#E87722", r: 9 },
      finish: { fill: "#1A1A2E", stroke: "#E87722", r: 10 },
    };

    const addMarkers = () => {
      aidStations.forEach((s) => {
        const c = markerColors[s.type];
        L.circleMarker(s.pos, {
          radius: c.r,
          fillColor: c.fill,
          color: c.stroke,
          weight: 2.5,
          opacity: 1,
          fillOpacity: 1,
        })
          .addTo(map)
          .bindPopup(`<strong>${s.label}</strong><br><span style="color:#888;font-size:12px">${s.note}</span>`);
      });
    };

    let frameId;
    let drawn = 0;
    const draw = () => {
      if (drawn < routeCoords.length) {
        drawn = Math.min(drawn + 3, routeCoords.length);
        animLine.setLatLngs(routeCoords.slice(0, drawn));
        frameId = requestAnimationFrame(draw);
      } else {
        routeStatic.setStyle({ opacity: 0.92 });
        animLine.setStyle({ opacity: 0 });
        addMarkers();
      }
    };

    const timerId = window.setTimeout(draw, 400);

    return () => {
      window.clearTimeout(timerId);
      if (frameId) cancelAnimationFrame(frameId);
      map.remove();
      mapRef.current = null;
    };
  }, [isLightMode]);

  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
        <div className="lg:col-span-1 space-y-8">
          <h2 className="font-headline text-6xl uppercase leading-tight">
            YOUR ROAD THROUGH<br />
            <span className="text-primary-container">RAJASTHAN</span>
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-2xl border border-outline-variant/25 bg-surface-container-highest p-6 sm:p-7 flex flex-col gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
              <span className="font-title text-secondary tracking-[0.18em] text-xs">START POINT</span>
              <span className="font-headline text-2xl leading-tight">JAL MAHAL PALACE</span>
            </div>
            <div className="rounded-2xl border border-outline-variant/25 bg-surface-container-highest p-6 sm:p-7 flex flex-col gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
              <span className="font-title text-secondary tracking-[0.18em] text-xs">SURFACE TYPE</span>
              <span className="font-headline text-2xl leading-tight">COBBLESTONE & SAND</span>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 rounded-3xl bg-background overflow-hidden border border-outline-variant/20">
          <div className="bg-[#1A1A2E] px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#E87722]" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
            </div>
            <span className="font-title text-[11px] tracking-[0.2em] uppercase text-[#E87722]">
              Jaipur Ultra Route
            </span>
          </div>
          <div ref={mapContainerRef} className="h-[360px] sm:h-[430px] lg:h-[500px] w-full" />
          <div className="bg-[#1A1A2E] px-5 py-3 flex items-center justify-between">
            <span className="font-title text-[10px] tracking-[0.2em] uppercase text-white/45">
              100% Road · 50 KM · 8hr cutoff
            </span>
            <div className="flex gap-2">
              <span className="px-2 py-1 border border-[#E87722]/70 rounded text-[10px] font-title uppercase tracking-[0.15em] text-[#E87722]">50 KM</span>
              <span className="px-2 py-1 border border-[#E87722]/70 rounded text-[10px] font-title uppercase tracking-[0.15em] text-[#E87722]">Aid 6+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
