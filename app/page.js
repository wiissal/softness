export default function Home() {
  const swatches = [
    { name: "ivory", className: "bg-ivory" },
    { name: "cream", className: "bg-cream" },
    { name: "sand", className: "bg-sand" },
    { name: "linen", className: "bg-linen" },
    { name: "sage-soft", className: "bg-sage-soft" },
    { name: "sage", className: "bg-sage" },
    { name: "olive", className: "bg-olive" },
    { name: "bark", className: "bg-bark" },
    { name: "clay", className: "bg-clay" },
    { name: "ink", className: "bg-ink" },
  ];
  return (
    <main className="grain min-h-screen bg-cream px-6 py-16 md:px-16">
      <p className="label text-olive">Fresh · Local · Seasonal</p>

      <h1 className="font-display mt-6 text-6xl leading-none md:text-8xl">
        Food made with <em className="text-olive">softness.</em>
      </h1>

      <p className="mt-6 max-w-md text-ink-soft">
        Fresh ingredients, thoughtful cooking and simple moments made to be shared.
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        {swatches.map((swatch) => (
          <div key={swatch.name} className="text-center text-xs">
            <div className={`size-16 rounded-blob border border-ink/10 ${swatch.className}`} />
            <p className="mt-2">{swatch.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}