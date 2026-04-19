export default function WhyAttend() {
  const reasons = [
    {
      number: "01",
      title: "HISTORIC ROUTE",
      description: "Run through UNESCO heritage sites and centuries-old fortresses."
    },
    {
      number: "02",
      title: "ELITE LOGISTICS",
      description: "World-class safety and aid stations every 4KM with medical support."
    },
    {
      number: "03",
      title: "DESERT ENDURANCE",
      description: "Test your limits against the unique heat and sand of Rajasthan."
    },
    {
      number: "04",
      title: "COMMUNITY VIBE",
      description: "Join a global tribe of ultra-runners and adventure seekers."
    },
    {
      number: "05",
      title: "FINISHER GLORY",
      description: "Custom sand-blasted metal medals and local heritage kits."
    },
    {
      number: "06",
      title: "CULTURAL GALA",
      description: "Post-race desert celebration with traditional Rajasthani food."
    }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-outline-variant/20 border border-outline-variant/20">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-background p-12 space-y-6">
              <div className="font-headline text-5xl text-outline opacity-20">{reason.number}</div>
              <h4 className="font-headline text-3xl uppercase">{reason.title}</h4>
              <p className="text-on-surface-variant leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
