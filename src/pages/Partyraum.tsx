const Partyraum = () => (
  <div className="bg-card min-h-screen">
    <section className="bg-background section-padding">
      <div className="container mx-auto">
        <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">Partyraum</h1>
        <p className="text-foreground/80 text-lg max-w-2xl">
          Unser Eventraum im Herzen von Rifferswil – ideal für Feiern, Firmenausflüge und private Anlässe.
        </p>
      </div>
    </section>
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-heading text-card-foreground mb-4">Eventraum mieten</h2>
            <ul className="space-y-3 text-card-foreground/70">
              <li>✓ Platz für bis zu 40 Personen</li>
              <li>✓ Küche und sanitäre Anlagen vorhanden</li>
              <li>✓ Bogenschiessen als Rahmenprogramm buchbar</li>
              <li>✓ Ideal für Geburtstage, Teamevents, Vereinsanlässe</li>
              <li>✓ Bezirk Affoltern – leicht erreichbar</li>
            </ul>
            <a
              href="mailto:info@pfeilundbogen.riffi.ch"
              className="inline-block mt-6 bg-accent text-accent-foreground font-heading uppercase tracking-wider px-6 py-3 rounded hover:opacity-90 transition-opacity"
            >
              Anfrage senden
            </a>
          </div>
          <div>
            <h2 className="text-2xl font-heading text-card-foreground mb-4">Fotogalerie</h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground/40 font-heading text-sm"
                >
                  Foto {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Partyraum;