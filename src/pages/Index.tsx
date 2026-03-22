import TargetGraphic from "@/components/TargetGraphic";
import InfoCard from "@/components/InfoCard";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-background relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Decorative arrows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[80%] h-1 bg-arrow-orange rotate-[15deg] origin-left rounded-full opacity-60" />
          <div className="absolute top-[35%] left-[5%] w-[75%] h-1 bg-arrow-yellow rotate-[20deg] origin-left rounded-full opacity-50" />
        </div>

        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10 py-16">
          <div className="max-w-xl">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none text-foreground mb-6">
              NATURNAHER SPORT<br />IN RIFFERSWIL
            </h1>
            <Link
              to="/training"
              className="inline-block bg-accent text-accent-foreground font-heading text-lg uppercase tracking-widest px-8 py-4 rounded hover:opacity-90 transition-opacity"
            >
              Jetzt starten
            </Link>
          </div>
          <TargetGraphic className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mt-10 lg:mt-0 flex-shrink-0" />
        </div>
      </section>

      {/* Info Cards */}
      <section className="bg-card section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <InfoCard
              icon="target"
              title="Starter Kurse"
              description="Einstiegskurse für Anfänger jeden Alters. Ausrüstung wird gestellt – einfach vorbeikommen und loslegen."
            />
            <InfoCard
              icon="calendar"
              title="Events"
              description="Regelmässige Vereinsanlässe, Turniere und gesellige Abende für alle Mitglieder und Gäste."
            />
            <InfoCard
              icon="map"
              title="Bogenplatz Infos"
              description="Unser Bogenplatz mitten in der Natur bietet optimale Bedingungen für Indoor- und Outdoor-Training."
            />
          </div>
        </div>
      </section>

      {/* Neuigkeiten */}
      <section className="bg-background section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-8">Neuigkeiten</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Saisonstart 2025", text: "Die Outdoor-Saison beginnt am 1. April. Wir freuen uns auf euch!" },
              { title: "Neuer Anfängerkurs", text: "Ab Mai bieten wir jeden Samstag einen Schnupperkurs an. Anmeldung per E-Mail." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-heading text-card-foreground mb-2">{item.title}</h3>
                <p className="text-card-foreground/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;