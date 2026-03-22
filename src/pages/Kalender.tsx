import { Calendar } from "lucide-react";

const Kalender = () => (
  <div className="bg-card min-h-screen">
    <section className="bg-background section-padding">
      <div className="container mx-auto">
        <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">Kalender</h1>
        <p className="text-foreground/80 text-lg max-w-2xl">
          Alle Termine und Veranstaltungen auf einen Blick.
        </p>
      </div>
    </section>
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-secondary rounded-lg border border-border p-12 flex flex-col items-center justify-center min-h-[400px] gap-4">
          <Calendar className="w-16 h-16 text-card-foreground/30" />
          <p className="text-card-foreground/50 font-heading uppercase tracking-wider">
            Google Calendar Embed – kommt bald
          </p>
          <p className="text-card-foreground/40 text-sm text-center max-w-md">
            Hier wird demnächst ein eingebetteter Google Kalender mit allen Vereinsanlässen, Trainings und Events angezeigt.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Kalender;