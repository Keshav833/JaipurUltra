export default function Testimonials() {
  const testimonials = [
    {
      quote: "The most brutal and beautiful 50K I have ever run. The climb to the fort was punishing but the view was worth every drop of sweat.",
      author: "Markus Veldt",
      role: "50K FINISHER (2024)"
    },
    {
      quote: "Jaipur Ultra isn't a race, it's a pilgrimage. The energy of the city waking up as you run through the gates is something I'll never forget.",
      author: "Anjali Sharma",
      role: "25K CHALLENGER (2025)"
    },
    {
      quote: "Sand, heat, and heritage. A perfect cocktail for any ultra-runner looking for their next level. Rajasthan is simply magical.",
      author: "David Chen",
      role: "50K FINISHER (2025)"
    }
  ];

  return (
    <section className="py-24 px-8 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="space-y-6 p-8 bg-surface-container-high">
            <div className="text-primary-container font-headline text-6xl leading-none">"</div>
            <p className="text-lg italic text-on-surface leading-relaxed">"{testimonial.quote}"</p>
            <div className="pt-6">
              <div className="font-title uppercase text-primary tracking-widest">{testimonial.author}</div>
              <div className="text-xs text-secondary tracking-widest uppercase">{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
