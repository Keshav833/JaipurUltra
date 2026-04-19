export default function RaceCategories() {
  const categories = [
    {
      title: "50KM ULTRA",
      distance: "50.0 KM",
      cutoff: "8.5 HOURS",
      surface: "Mixed Terrain",
      aidStations: "12 POINTS",
      number: "50"
    },
    {
      title: "25KM CHALLENGE",
      distance: "25.0 KM",
      cutoff: "4.0 HOURS",
      surface: "Road & Trail",
      aidStations: "6 POINTS",
      number: "25"
    }
  ];

  return (
    <section className="py-24 px-8 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <h2 className="font-headline text-8xl uppercase leading-[0.8]">
          CHOOSE YOUR<br />
          <span className="text-primary-container">BATTLE</span>
        </h2>
        <div className="font-title text-secondary tracking-[0.2em] mb-4">PICK YOUR DISTANCE</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="group relative bg-surface-container-low p-12 border-l-4 border-transparent hover:border-primary-container transition-all duration-500 overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 font-headline text-[200px] leading-none text-on-surface/5 select-none">
              {category.number}
            </div>
            <div className="relative z-10 space-y-10">
              <h3 className="font-headline text-5xl uppercase tracking-wide">{category.title}</h3>
              <table className="w-full font-title text-left uppercase">
                <tbody>
                  <tr className="border-b border-outline-variant/10">
                    <td className="py-4 text-secondary">Distance</td>
                    <td className="py-4 text-right text-on-surface">{category.distance}</td>
                  </tr>
                  <tr className="border-b border-outline-variant/10">
                    <td className="py-4 text-secondary">Cut-off</td>
                    <td className="py-4 text-right text-on-surface">{category.cutoff}</td>
                  </tr>
                  <tr className="border-b border-outline-variant/10">
                    <td className="py-4 text-secondary">Surface</td>
                    <td className="py-4 text-right text-on-surface">{category.surface}</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-secondary">Aid Stations</td>
                    <td className="py-4 text-right text-on-surface">{category.aidStations}</td>
                  </tr>
                </tbody>
              </table>
              <button className="w-full bg-surface-container-highest py-4 font-title tracking-[0.2em] uppercase hover:bg-primary-container hover:text-on-primary-container transition-colors">
                SELECT CHALLENGE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
