const Verein = () => (
  <div className="bg-card min-h-screen">
    <section className="bg-background section-padding">
      <div className="container mx-auto">
        <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">Der Verein</h1>
        <p className="text-foreground/80 text-lg max-w-2xl">
          Pfeil und Bogen Rifferswil – dein Bogensportverein im Bezirk Affoltern seit 2018.
        </p>
      </div>
    </section>
    <section className="section-padding">
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-heading text-card-foreground mb-4">Geschichte</h2>
          <p className="text-card-foreground/70 leading-relaxed">
            Gegründet von einer kleinen Gruppe Bogensport-Begeisterter, ist der Verein heute eine lebendige
            Gemeinschaft. Wir bieten regelmässiges Training, Kurse und Veranstaltungen für Gross und Klein.
            Unser Bogenplatz liegt idyllisch in der Natur rund um Rifferswil.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-heading text-card-foreground mb-4">Mitglied werden</h2>
          <p className="text-card-foreground/70 leading-relaxed mb-4">
            Du möchtest Teil unseres Vereins werden? Melde dich bei uns per E-Mail oder komm einfach zu einem
            Training vorbei. Anfänger sind herzlich willkommen!
          </p>
          <a
            href="mailto:info@pfeilundbogen.riffi.ch"
            className="inline-block bg-accent text-accent-foreground font-heading uppercase tracking-wider px-6 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Verein;