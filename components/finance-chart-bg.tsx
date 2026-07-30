export default function FinanceChartBg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1600 800"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden
    >
      <rect x="0" y="0" width="1600" height="800" className="fill-navy-950" />

      {/* grid */}
      <g stroke="#ffffff" strokeOpacity="0.07" strokeWidth="1">
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 100} x2="1600" y2={i * 100} />
        ))}
        {Array.from({ length: 17 }, (_, i) => (
          <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="800" />
        ))}
      </g>

      {/* area fill under the trend line */}
      <defs>
        <linearGradient id="areaFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-gold-500)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--color-gold-500)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M 0,620 L 140,560 L 280,600 L 420,480 L 560,520 L 700,400 L 840,440 L 980,320 L 1120,360 L 1260,240 L 1400,270 L 1600,160 L 1600,800 L 0,800 Z"
        fill="url(#areaFade)"
      />

      {/* trend line */}
      <path
        d="M 0,620 L 140,560 L 280,600 L 420,480 L 560,520 L 700,400 L 840,440 L 980,320 L 1120,360 L 1260,240 L 1400,270 L 1600,160"
        fill="none"
        className="stroke-gold-400"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* markers */}
      {[
        [140, 560],
        [420, 480],
        [700, 400],
        [980, 320],
        [1260, 240],
        [1600, 160],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="6" className="fill-gold-400" />
      ))}
    </svg>
  );
}
