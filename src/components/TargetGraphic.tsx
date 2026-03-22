const TargetGraphic = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 300" className={className} aria-hidden="true">
    {/* Outer ring - cyan */}
    <circle cx="150" cy="150" r="140" fill="hsl(187, 80%, 48%)" />
    {/* Black ring */}
    <circle cx="150" cy="150" r="110" fill="hsl(0, 0%, 10%)" />
    {/* Red ring */}
    <circle cx="150" cy="150" r="80" fill="hsl(0, 75%, 50%)" />
    {/* Yellow ring */}
    <circle cx="150" cy="150" r="50" fill="hsl(45, 95%, 55%)" />
    {/* Bullseye */}
    <circle cx="150" cy="150" r="20" fill="hsl(0, 0%, 10%)" />
    {/* Arrows */}
    <line x1="40" y1="260" x2="160" y2="140" stroke="hsl(25, 90%, 55%)" strokeWidth="4" />
    <polygon points="160,140 152,148 148,136" fill="hsl(25, 90%, 55%)" />
    <line x1="20" y1="240" x2="145" y2="155" stroke="hsl(48, 95%, 55%)" strokeWidth="4" />
    <polygon points="145,155 137,163 133,151" fill="hsl(48, 95%, 55%)" />
  </svg>
);

export default TargetGraphic;