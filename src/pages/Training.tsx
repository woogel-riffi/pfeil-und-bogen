const schedule = [
  { day: "Montag", time: "18:00 – 20:00", type: "Freies Training" },
  { day: "Mittwoch", time: "18:00 – 20:00", type: "Anfängerkurs" },
  { day: "Freitag", time: "18:00 – 21:00", type: "Freies Training" },
  { day: "Samstag", time: "10:00 – 12:00", type: "Schnupperkurs" },
];

const Training = () => (
  <div className="bg-card min-h-screen">
    <section className="bg-background section-padding">
      <div className="container mx-auto">
        <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">Training</h1>
        <p className="text-foreground/80 text-lg max-w-2xl">
          Unsere Trainingszeiten in Rifferswil – bei jedem Wetter.
        </p>
      </div>
    </section>
    <section className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead>
              <tr className="bg-forest text-cream">
                <th className="text-left px-6 py-3 font-heading uppercase tracking-wider">Tag</th>
                <th className="text-left px-6 py-3 font-heading uppercase tracking-wider">Zeit</th>
                <th className="text-left px-6 py-3 font-heading uppercase tracking-wider">Art</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((s, i) => (
                <tr key={s.day} className={i % 2 === 0 ? "bg-card" : "bg-secondary"}>
                  <td className="px-6 py-4 font-semibold text-card-foreground">{s.day}</td>
                  <td className="px-6 py-4 text-card-foreground/70">{s.time}</td>
                  <td className="px-6 py-4 text-card-foreground/70">{s.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-card-foreground/60 text-sm">
          Änderungen vorbehalten. Bei Fragen bitte an info@pfeilundbogen.riffi.ch wenden.
        </p>
      </div>
    </section>
  </div>
);

export default Training;