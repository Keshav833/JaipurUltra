import { useEffect, useMemo, useRef, useState } from "react";

const routeCoords50k = [
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

const routeCoords25k = [
  [26.954686, 75.842634], [26.955173, 75.842805], [26.956792, 75.843407], [26.958544, 75.844276], [26.959921, 75.844934],
  [26.961011, 75.845187], [26.961463, 75.845411], [26.961864, 75.845614], [26.962084, 75.845723], [26.963132, 75.846159],
  [26.963955, 75.846553], [26.964623, 75.846769], [26.964764, 75.846771], [26.965416, 75.846543], [26.966031, 75.846449],
  [26.966768, 75.846532], [26.967373, 75.847261], [26.967771, 75.847823], [26.968103, 75.848322], [26.968328, 75.848861],
  [26.968607, 75.849069], [26.96932, 75.849188], [26.969751, 75.849272], [26.970078, 75.84964], [26.970179, 75.850005],
  [26.970063, 75.850803], [26.97006, 75.850929], [26.970213, 75.851159], [26.970804, 75.851581], [26.971247, 75.851669],
  [26.971798, 75.851706], [26.972677, 75.851821], [26.97291, 75.851727], [26.973149, 75.851678], [26.973732, 75.851832],
  [26.974488, 75.851721], [26.974975, 75.851587], [26.97554, 75.851225], [26.975947, 75.851204], [26.976255, 75.851397],
  [26.976618, 75.851722], [26.977124, 75.851943], [26.978431, 75.852243], [26.979663, 75.852447], [26.979947, 75.852474],
  [26.980478, 75.852478], [26.981253, 75.852566], [26.982554, 75.85289], [26.982981, 75.85313], [26.983163, 75.853255],
  [26.98363, 75.853495], [26.984857, 75.853905], [26.985347, 75.85396], [26.985827, 75.853954], [26.986298, 75.853948],
  [26.987012, 75.854333], [26.987294, 75.854516], [26.98769, 75.854856], [26.98827, 75.855314], [26.988404, 75.855483],
  [26.988544, 75.855835], [26.988558, 75.856216], [26.988495, 75.857143], [26.988484, 75.858572], [26.988513, 75.859468],
  [26.988569, 75.860196], [26.988769, 75.861438], [26.989207, 75.862217], [26.98982, 75.863596], [26.990292, 75.864642],
  [26.990705, 75.865546], [26.991257, 75.866887], [26.991451, 75.867838], [26.99171, 75.870291], [26.991905, 75.87219],
  [26.992029, 75.873196], [26.993098, 75.874836], [26.993912, 75.875367], [26.994636, 75.875716], [26.995602, 75.876123],
  [26.996486, 75.876342], [26.998017, 75.876291], [26.998777, 75.87626], [27.00045, 75.876191], [27.001376, 75.876227],
  [27.002017, 75.876339], [27.004223, 75.876775], [27.005424, 75.877132], [27.006545, 75.877713], [27.007275, 75.877916],
  [27.008201, 75.877997], [27.009745, 75.878108], [27.011078, 75.878289], [27.011955, 75.878505], [27.012416, 75.878636],
  [27.012584, 75.877551], [27.012484, 75.877131], [27.013252, 75.876857], [27.013848, 75.876323], [27.014067, 75.874982],
  [27.014146, 75.874867], [27.014201, 75.874778], [27.014199, 75.87474], [27.01460069, 75.8746624], [27.01500932, 75.87464106],
  [27.01537588, 75.87479995], [27.0157135, 75.87493652], [27.01778393, 75.87532622], [27.01800011, 75.87510659], [27.01819161, 75.87455055],
  [27.01831719, 75.874338], [27.01877098, 75.87412267], [27.01892766, 75.87406473], [27.0191514, 75.87397443], [27.01935206, 75.87394272],
  [27.01999366, 75.87388148], [27.02047827, 75.87386819], [27.02127665, 75.8732062], [27.02153539, 75.87310222], [27.02160927, 75.87259434],
  [27.02168887, 75.87235078], [27.02190828, 75.8718495], [27.02199298, 75.87163419], [27.02194509, 75.8711436], [27.02180327, 75.87098906],
  [27.02148664, 75.87080607], [27.02135761, 75.87073459], [27.0211931, 75.87055361], [27.02118901, 75.87039577], [27.02130873, 75.87013815],
  [27.021417, 75.87002245], [27.02157077, 75.86988063], [27.02166242, 75.86983263], [27.0217708, 75.86970258], [27.02181873, 75.86965291],
  [27.02193015, 75.86948023], [27.02205097, 75.86928256], [27.02221889, 75.86909774], [27.02237691, 75.86902392], [27.02271897, 75.86920381],
  [27.02302424, 75.86944651], [27.02355588, 75.86990922], [27.02387589, 75.87006089], [27.02432558, 75.87004682], [27.02451964, 75.87005251],
  [27.02500245, 75.87015599], [27.02541205, 75.87034024], [27.02555859, 75.87045403], [27.02562728, 75.87052189], [27.02581839, 75.87057472],
  [27.02591921, 75.87055163], [27.02607564, 75.870556], [27.02618616, 75.87057569], [27.02630376, 75.87085925], [27.0263439, 75.87099715],
  [27.02655447, 75.87152277], [27.02663218, 75.87168399], [27.02691659, 75.87221702], [27.02706018, 75.87259519], [27.02783864, 75.87344066],
  [27.02826682, 75.87382359], [27.02884785, 75.87434835], [27.02923303, 75.87456577], [27.03019857, 75.8747633], [27.03072548, 75.87493859],
  [27.03219458, 75.87594908], [27.03330943, 75.87655393], [27.03591013, 75.87815712], [27.03698833, 75.8788456], [27.037724, 75.880294],
  [27.037722, 75.880033], [27.03767, 75.880428], [27.037235, 75.881469], [27.036957, 75.881991], [27.036689, 75.882414],
  [27.036316, 75.883], [27.036075, 75.883438], [27.035993, 75.883673], [27.036039, 75.884467], [27.036042, 75.884872],
  [27.036042, 75.885362], [27.036038, 75.885839], [27.03685, 75.886082], [27.038068, 75.886183], [27.038694, 75.886361],
  [27.039888, 75.886704], [27.041341, 75.886822], [27.041728, 75.886881], [27.042875, 75.886956], [27.043231, 75.887039],
  [27.042761, 75.888691], [27.043237, 75.890367], [27.043513, 75.890646], [27.043706, 75.890532], [27.044681, 75.89047],
  [27.053163, 75.88945], [27.058653, 75.890103], [27.061525, 75.88972], [27.062323, 75.889947], [27.063998, 75.89111],
  [27.06646, 75.891318], [27.071593, 75.890297], [27.076885, 75.890933], [27.079883, 75.890762], [27.084685, 75.888993],
  [27.090725, 75.885953], [27.092118, 75.88677], [27.09294, 75.886375], [27.093835, 75.886398], [27.094395, 75.887198],
  [27.095788, 75.887995], [27.096988, 75.888173], [27.098268, 75.889442], [27.100236, 75.891471], [27.100307, 75.891533],
  [27.100385, 75.89152], [27.10067905, 75.89188885], [27.10145978, 75.89256615], [27.10261856, 75.89349968], [27.10298636, 75.89418701],
  [27.10286858, 75.89472167], [27.10302476, 75.89485064], [27.10416082, 75.89531708], [27.10452704, 75.89545314], [27.10512812, 75.89640332],
  [27.10542629, 75.8967287], [27.1064832, 75.8967647], [27.10676638, 75.89659511], [27.10747527, 75.8966577], [27.10746434, 75.89651744],
  [27.10723289, 75.89621399], [27.10732584, 75.89596392], [27.10760685, 75.89558936], [27.10778634, 75.8954154], [27.10813098, 75.89486279],
  [27.10830101, 75.89470779], [27.1088695, 75.89402136], [27.10915353, 75.89353746], [27.10977949, 75.89288569], [27.11005114, 75.89249523],
  [27.11053568, 75.89187794], [27.11075354, 75.89169993], [27.11175759, 75.89144534], [27.11219879, 75.89118845], [27.11291164, 75.89034843],
  [27.11312109, 75.88974556], [27.11401781, 75.88862849], [27.11436626, 75.88820228], [27.11475298, 75.88834755], [27.11512175, 75.88826028],
  [27.1154868, 75.88832153], [27.11579272, 75.88849737], [27.11624069, 75.88853075], [27.11640528, 75.8884474], [27.11689324, 75.88850938],
  [27.11699495, 75.88881763], [27.11696768, 75.88931985], [27.11695966, 75.8895947], [27.11709923, 75.89027171], [27.11736878, 75.89052404],
  [27.11773278, 75.89073852], [27.11772289, 75.89095066], [27.11782191, 75.89172136], [27.11792996, 75.89201965], [27.11837224, 75.89298359],
  [27.11835666, 75.89362275], [27.11835249, 75.89494116], [27.11835547, 75.89552518], [27.11800973, 75.89601678], [27.11763861, 75.89617458],
  [27.11697364, 75.89615789], [27.11663065, 75.89640874], [27.11619285, 75.89675345], [27.11611452, 75.89706476], [27.11557515, 75.89756879],
  [27.11544693, 75.89774228], [27.11516268, 75.89899114], [27.1150911, 75.8991211], [27.11484584, 75.89970903], [27.11469791, 75.89993618],
  [27.11477944, 75.90040528], [27.11495025, 75.90072878], [27.11523438, 75.90118236],
];

const aidStations50k = [
  { km: 0, pos: [26.95453, 75.84259], label: "Start - Jal Mahal", note: "Race begins at the iconic lake palace", type: "start" },
  { km: 7, pos: [26.98104, 75.85254], label: "Aid Station 1 (~7 KM)", note: "Hydration, nutrition, first check", type: "aid" },
  { km: 14, pos: [27.02163, 75.87308], label: "Aid Station 2 (~14 KM)", note: "Route enters rural farmland", type: "aid" },
  { km: 21, pos: [27.06015, 75.89059], label: "Aid Station 3 (~21 KM)", note: "Village corridor stretch", type: "aid" },
  { km: 25, pos: [27.10035, 75.89157], label: "Turnaround (~25 KM)", note: "Midpoint - head back to Jal Mahal", type: "turn" },
  { km: 35, pos: [27.14021, 75.9246], label: "Aid Station 4 (~35 KM)", note: "Deep desert landscape section", type: "aid" },
  { km: 43, pos: [27.16085, 75.92864], label: "Aid Station 5 (~43 KM)", note: "Final major aid before finish", type: "aid" },
  { km: 50, pos: [27.14371, 75.95835], label: "Finish Line (~50 KM)", note: "You made it - Pink City glory", type: "finish" },
];

const aidStations25k = [
  { km: 0, pos: [26.954686, 75.842634], label: "Start - Jal Mahal", note: "Race begins at the iconic lake palace", type: "start" },
  { km: 5, pos: [26.98769, 75.854856], label: "Aid Station 1 (~5 KM)", note: "Hydration, nutrition, first check", type: "aid" },
  { km: 10, pos: [27.01935, 75.87394], label: "Aid Station 2 (~10 KM)", note: "Route enters rural farmland corridor", type: "aid" },
  { km: 15, pos: [27.037235, 75.881469], label: "Aid Station 3 (~15 KM)", note: "Village roads, halfway point", type: "aid" },
  { km: 20, pos: [27.10542, 75.89672], label: "Aid Station 4 (~20 KM)", note: "Final push - 5 KM to finish", type: "aid" },
  { km: 25, pos: [27.11523, 75.90118], label: "Finish Line (~25 KM)", note: "Gateway ultra complete", type: "finish" },
];

const routeOptions = {
  "50": {
    label: "50 KM",
    title: "50 KM Ultra",
    description: "Full-distance route through Rajasthan countryside, village roads, and long-haul endurance terrain.",
    coords: routeCoords50k,
    stations: aidStations50k,
    stats: [
      ["50", "KM", "Total Distance"],
      ["8", "hr", "Cut-off Time"],
      ["6", "+", "Aid Stations"],
      ["100", "%", "Road Surface"],
    ],
    bottomText: "100% road - 50 KM - 8hr cutoff",
    badges: ["50 KM", "Aid 6+"],
    surfaceType: "ROAD & TRAIL",
    accent: "#c95f14",
  },
  "25": {
    label: "25 KM",
    title: "25 KM Challenge",
    description: "From Jal Mahal northward through Jaipur's suburban edges, farms, and village byways.",
    coords: routeCoords25k,
    stations: aidStations25k,
    stats: [
      ["25", "KM", "Total Distance"],
      ["4", "hr", "Cut-off Time"],
      ["4", "+", "Aid Stations"],
      ["100", "%", "Road Surface"],
    ],
    bottomText: "100% road - 25 KM - 4hr cutoff",
    badges: ["25 KM", "4hr cutoff"],
    surfaceType: "ROAD SURFACE",
    accent: "#c95f14",
  },
};

export default function RouteMap({ isLightMode = false }) {
  const [activeRoute, setActiveRoute] = useState("50");
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const route = routeOptions[activeRoute];

  const markerColors = useMemo(() => ({
    start: { fill: "#E87722", stroke: "#1A1A2E", r: 10 },
    aid: { fill: "#fff8f0", stroke: route.accent, r: 7 },
    turn: { fill: "#1A1A2E", stroke: "#E87722", r: 9 },
    finish: { fill: activeRoute === "25" ? "#ffb347" : "#1A1A2E", stroke: "#E87722", r: 10 },
  }), [activeRoute, route.accent]);

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
    const mapElement = mapContainerRef.current;

    L.DomEvent.disableScrollPropagation(mapElement);
    L.DomEvent.disableClickPropagation(mapElement);

    const preventPageScroll = (event) => {
      event.preventDefault();
    };

    mapElement.addEventListener("touchmove", preventPageScroll, { passive: false });

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

    const routeStatic = L.polyline(route.coords, {
      color: route.accent,
      weight: 5,
      opacity: 0,
      lineJoin: "round",
      lineCap: "round",
    }).addTo(map);

    map.fitBounds(routeStatic.getBounds(), { padding: [30, 30] });

    const animLine = L.polyline([], {
      color: route.accent,
      weight: 5,
      opacity: 0.92,
      lineJoin: "round",
      lineCap: "round",
    }).addTo(map);

    const addMarkers = () => {
      route.stations.forEach((station) => {
        const color = markerColors[station.type];
        L.circleMarker(station.pos, {
          radius: color.r,
          fillColor: color.fill,
          color: color.stroke,
          weight: 2.5,
          opacity: 1,
          fillOpacity: 1,
        })
          .addTo(map)
          .bindPopup(`<strong>${station.label}</strong><br><span style="color:#888;font-size:12px">${station.note}</span>`);
      });
    };

    let frameId;
    let drawn = 0;
    const draw = () => {
      if (drawn < route.coords.length) {
        drawn = Math.min(drawn + (activeRoute === "25" ? 4 : 3), route.coords.length);
        animLine.setLatLngs(route.coords.slice(0, drawn));
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
      mapElement.removeEventListener("touchmove", preventPageScroll);
      map.remove();
      mapRef.current = null;
    };
  }, [activeRoute, isLightMode, markerColors, route]);

  return (
    <section className="bg-surface-container-low py-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 md:px-8 lg:grid-cols-3 lg:gap-16">
        <div className="space-y-8 lg:col-span-1">
          <div>
            <p className="mb-3 font-title text-xs font-bold uppercase tracking-[0.3em] text-primary-container">
              {activeRoute === "25" ? "The Gateway Route" : "The Ultra Route"}
            </p>
            <h2 className="font-headline text-6xl uppercase leading-tight">
              YOUR ROAD THROUGH<br />
              <span className="text-primary-container">RAJASTHAN</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-secondary">
              {route.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col gap-2 rounded-2xl border border-outline-variant/25 bg-surface-container-highest p-6 shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:p-7">
              <span className="font-title text-xs tracking-[0.18em] text-secondary">START POINT</span>
              <span className="font-headline text-2xl leading-tight">JAL MAHAL PALACE</span>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl border border-outline-variant/25 bg-surface-container-highest p-6 shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:p-7">
              <span className="font-title text-xs tracking-[0.18em] text-secondary">SURFACE TYPE</span>
              <span className="font-headline text-2xl leading-tight">{route.surfaceType}</span>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-outline-variant/20 bg-background lg:col-span-2">
          <div className="flex items-center justify-between bg-[#1A1A2E] px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#E87722]" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
            </div>
            <span className="font-title text-[11px] uppercase tracking-[0.2em] text-[#E87722]">
              Jaipur Ultra Route - {route.title}
            </span>
          </div>

          <div
            key={activeRoute}
            ref={mapContainerRef}
            className={`h-[360px] w-full overscroll-contain [touch-action:none] sm:h-[430px] lg:h-[500px] ${!isLightMode ? "map-tiles-bright" : ""}`}
          />

          <div className="flex border-t border-outline-variant/20 bg-surface-container-highest px-4 py-4 sm:px-6">
            <div className="flex w-full overflow-hidden rounded-lg border-2 border-[#1A1A2E]">
              {Object.entries(routeOptions).map(([key, option]) => {
                const isActive = key === activeRoute;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveRoute(key)}
                    className={`flex-1 border-r-2 border-[#1A1A2E] px-5 py-3 sm:py-4 font-title text-sm md:text-base font-bold uppercase tracking-[0.18em] transition last:border-r-0 ${
                      isActive
                        ? "bg-[#1A1A2E] text-[#E87722]"
                        : isLightMode
                          ? "bg-[#fff8f0] text-[#1A1A2E] hover:bg-[#f0e8d8]"
                          : "bg-background text-white hover:bg-white/10"
                    }`}
                    aria-pressed={isActive}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* <div className="flex items-center justify-between bg-[#1A1A2E] px-5 py-3">
            <span className="hidden font-title text-[10px] uppercase tracking-[0.2em] text-white/45 sm:inline">
              {route.bottomText}
            </span>
            <div className="flex gap-2">
              {route.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded border border-[#E87722]/70 px-2 py-1 font-title text-[10px] uppercase tracking-[0.15em] text-[#E87722]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div> */}

          <div className="grid grid-cols-2 border-t border-outline-variant/20 md:grid-cols-4">
            {route.stats.map(([value, unit, label]) => (
              <div key={label} className="border-r border-outline-variant/20 bg-surface-container-highest p-4 text-center last:border-r-0">
                <div className="font-headline text-3xl leading-none">
                  {value} <span className="text-lg text-primary-container">{unit}</span>
                </div>
                <div className="mt-2 font-title text-[10px] uppercase tracking-[0.18em] text-secondary">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
