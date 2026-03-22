import TargetGraphic from "@/components/TargetGraphic";
import InfoCard from "@/components/InfoCard";
import { Link } from "react-router-dom";
import heroBg from "@/assets/p_b_hero_bg.jpg";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden flex items-center bg-cover bg-center w-full" style={{ backgroundImage: `url(${heroBg})`, aspectRatio: '1584/672' }}>
        <div className="container mx-auto px-6 flex flex-col items-start justify-center relative z-10 py-8">
          <div className="max-w-lg">
            <h1 className="font-display leading-none text-foreground md:text-7xl text-5xl lg:text-8xl">
              NATURNAHER SPORT<br />IN RIFFERSWIL
            </h1>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="section-padding bg-primary-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <InfoCard
              icon="target"
              title="KURSE UND TRAINING"
              description="Einstiegskurse für Anfänger jeden Alters. Ausrüstung wird gestellt – einfach vorbeikommen und loslegen." />
            
            <InfoCard
              icon="calendar"
              title="AGENDA"
              description="Regelmässige Vereinsanlässe, Turniere und gesellige Abende für alle Mitglieder und Gäste." />
            
            <InfoCard
              icon="map"
              title="UNSERE ANLAGE"
              description="Unser Bogenplatz mitten in der Natur bietet optimale Bedingungen für Indoor- und Outdoor-Training." />
            
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
            { title: "Neuer Anfängerkurs", text: "Ab Mai bieten wir jeden Samstag einen Schnupperkurs an. Anmeldung per E-Mail." }].
            map((item) =>
            <div key={item.title} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-heading text-card-foreground mb-2">{item.title}</h3>
                <p className="text-card-foreground/70">{item.text}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>);

};

export default Index;