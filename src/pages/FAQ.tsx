import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Brauche ich eigene Ausrüstung?",
    a: "Nein, für den Einstieg stellen wir Bögen und Pfeile zur Verfügung. Eigene Ausrüstung ist natürlich willkommen.",
  },
  {
    q: "Ab welchem Alter kann man mitmachen?",
    a: "Kinder ab ca. 8 Jahren können bei uns das Bogenschiessen ausprobieren, begleitet von einem Erwachsenen.",
  },
  {
    q: "Muss ich Mitglied sein, um zu trainieren?",
    a: "Für Schnupperkurse nicht. Wer regelmässig trainieren möchte, wird Vereinsmitglied.",
  },
  {
    q: "Wo genau ist der Bogenplatz?",
    a: "Unser Bogenplatz befindet sich in Rifferswil, Bezirk Affoltern. Die genaue Adresse erhältst du bei der Anmeldung.",
  },
  {
    q: "Kann ich den Partyraum auch ohne Bogenschiessen mieten?",
    a: "Ja, der Eventraum kann separat für Feiern und Anlässe gemietet werden.",
  },
  {
    q: "Wie melde ich mich für einen Kurs an?",
    a: "Per E-Mail an info@pfeilundbogen.riffi.ch oder direkt bei einem Training.",
  },
];

const FAQ = () => (
  <div className="bg-card min-h-screen">
    <section className="bg-background section-padding">
      <div className="container mx-auto">
        <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">FAQ</h1>
        <p className="text-foreground/80 text-lg max-w-2xl">
          Häufig gestellte Fragen rund um unseren Verein.
        </p>
      </div>
    </section>
    <section className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-secondary rounded-lg border border-border px-6"
            >
              <AccordionTrigger className="font-heading text-lg text-card-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-card-foreground/70">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </div>
);

export default FAQ;