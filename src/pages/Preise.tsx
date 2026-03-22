const prices = [
  { item: "Einzelmitgliedschaft (Erwachsene)", price: "CHF 200 / Jahr" },
  { item: "Einzelmitgliedschaft (Jugend)", price: "CHF 100 / Jahr" },
  { item: "Familienmitgliedschaft", price: "CHF 350 / Jahr" },
  { item: "Schnupperkurs (pro Person)", price: "CHF 30" },
  { item: "Partyraum Miete (halber Tag)", price: "CHF 150" },
  { item: "Partyraum Miete (ganzer Tag)", price: "CHF 250" },
  { item: "Bogenschiessen Rahmenprogramm", price: "CHF 20 / Person" },
];

const Preise = () => (
  <div className="bg-card min-h-screen">
    <section className="bg-background section-padding">
      <div className="container mx-auto">
        <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">Preise</h1>
        <p className="text-foreground/80 text-lg max-w-2xl">
          Transparente Kosten für Mitgliedschaft und Raumvermietung.
        </p>
      </div>
    </section>
    <section className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead>
              <tr className="bg-forest text-cream">
                <th className="text-left px-6 py-3 font-heading uppercase tracking-wider">Leistung</th>
                <th className="text-right px-6 py-3 font-heading uppercase tracking-wider">Preis</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((p, i) => (
                <tr key={p.item} className={i % 2 === 0 ? "bg-card" : "bg-secondary"}>
                  <td className="px-6 py-4 text-card-foreground">{p.item}</td>
                  <td className="px-6 py-4 text-right font-semibold text-card-foreground">{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-card-foreground/60 text-sm">
          Alle Preise in CHF. Änderungen vorbehalten.
        </p>
      </div>
    </section>
  </div>
);

export default Preise;