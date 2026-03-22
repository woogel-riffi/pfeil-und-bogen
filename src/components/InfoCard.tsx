import { Target, Calendar, MapPin } from "lucide-react";

const icons = {
  target: Target,
  calendar: Calendar,
  map: MapPin
};

interface InfoCardProps {
  icon: keyof typeof icons;
  title: string;
  description: string;
}

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  const Icon = icons[icon];
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#669b55]">
        <Icon className="w-10 h-10 text-cream" />
      </div>
      <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
      <p className="text-card-foreground/70 max-w-xs">{description}</p>
    </div>);

};

export default InfoCard;