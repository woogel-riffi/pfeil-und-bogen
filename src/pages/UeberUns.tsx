const board = [
  { name: "Max Muster", role: "Präsident" },
  { name: "Anna Beispiel", role: "Vizepräsidentin" },
  { name: "Peter Bogen", role: "Kassier" },
  { name: "Lisa Pfeil", role: "Trainingsleitung" },
];

const UeberUns = () => (
  <div className="bg-card min-h-screen">
    <section className="bg-background section-padding">
      <div className="container mx-auto">
        <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">Über uns</h1>
        <p className="text-foreground/80 text-lg max-w-2xl">
          Die Menschen hinter Pfeil und Bogen Rifferswil.
        </p>
      </div>
    </section>
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl font-heading text-card-foreground mb-4">Unsere Philosophie</h2>
          <p className="text-card-foreground/70 leading-relaxed">
            Bogenschiessen verbindet Konzentration, Natur und Gemeinschaft. Wir glauben, dass dieser
            uralte Sport für alle zugänglich sein soll – unabhängig von Alter oder Erfahrung. Bei uns stehen
            Spass, Fairness und die Freude an der Bewegung im Vordergrund.
          </p>
        </div>
        <h2 className="text-2xl font-heading text-card-foreground mb-6">Vorstand</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {board.map((m) => (
            <div key={m.name} className="bg-secondary rounded-lg p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-forest mx-auto mb-4 flex items-center justify-center text-cream font-display text-2xl">
                {m.name.charAt(0)}
              </div>
              <h3 className="font-heading text-lg text-card-foreground">{m.name}</h3>
              <p className="text-card-foreground/60 text-sm">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default UeberUns;