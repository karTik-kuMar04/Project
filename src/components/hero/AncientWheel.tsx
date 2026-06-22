"use client";

export default function AncientWheel() {
  const round = (n: number) => Number(n.toFixed(2));

  const C = 400;

  const pt = (r: number, deg: number) => ({
    x: round( C + r * Math.cos(((deg - 90) * Math.PI) / 180)),
    y: round(C + r * Math.sin(((deg - 90) * Math.PI) / 180)),
  });

  const totalTriangles = 72;
  const rangoliPoints = Array.from({ length: totalTriangles })
    .map((_, i) => {
      const angleValley = (i * 360) / totalTriangles;
      const anglePeak = ((i + 0.5) * 360) / totalTriangles;
      const valley = pt(354, angleValley); 
      const peak = pt(368, anglePeak);     
      return `${valley.x},${valley.y} ${peak.x},${peak.y}`;
    })
    .join(" ");

  return (
    <div className="w-full h-full">
      <svg viewBox="0 0 800 800" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          @keyframes cw  { to { transform: rotate(360deg);  } }
          @keyframes ccw { to { transform: rotate(-360deg); } }
          .g-rim    { transform-origin: 400px 400px; animation: cw  110s linear infinite; will-change: transform; }
          .g-spokes { transform-origin: 400px 400px; animation: cw  140s linear infinite; will-change: transform; }
          .g-inner  { transform-origin: 400px 400px; animation: ccw 85s  linear infinite; will-change: transform; }
        `}</style>

        {/* OUTER RIM (SILVER & LIGHT PLATINUM ASPECT) */}
        <g className="g-rim">
          <circle cx={C} cy={C} r="376" stroke="#E2E8F0" strokeWidth="1.5" opacity="0.25"/>
          
          {/* TRADITIONAL RANGOLI TRIANGLE BORDER - Silver Trim */}
          <polygon 
            points={rangoliPoints} 
            stroke="#cbd5e1" 
            strokeWidth="1.5" 
            fill="none" 
            opacity="0.5" 
          />

          <circle cx={C} cy={C} r="348" stroke="#A38A70" strokeWidth="1" opacity="0.2"/>
          {Array.from({ length: 24 }).map((_, i) => {
            const { x, y } = pt(376, (i * 360) / 24);
            return (
              <circle key={i} cx={x} cy={y}
                r={i % 2 === 0 ? 5 : 2.5}
                fill="#E2E8F0"
                opacity={i % 2 === 0 ? 0.75 : 0.35}
              />
            );
          })}
        </g>

        {/* MID SPOKES & FOUNDATION (CHISELED GOLD ASPECT) */}
        <g className="g-spokes">
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i * 360) / 24;
            const thick = i % 3 === 0;
            const p1 = pt(74, a);
            const p2 = pt(322, a);
            return (
              <line key={i}
                x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
                stroke={thick ? "#D4AF37" : "#AA8214"}
                strokeWidth={thick ? 2.2 : 1}
                opacity={thick ? 0.7 : 0.35}
              />
            );
          })}
          <circle cx={C} cy={C} r="322" stroke="#D4AF37" strokeWidth="2" opacity="0.4"/>
          <circle cx={C} cy={C} r="204" stroke="#8A6740" strokeWidth="1" opacity="0.25" strokeDasharray="4 8"/>
        </g>

        {/* INNER LOTUS CORE (BURNISHED COPPER & BRONZE ASPECT) */}
        <g className="g-inner">
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 360) / 12;
            const tip = pt(174, a);
            const lft = pt(136, a - 7);
            const rgt = pt(136, a + 7);
            return (
              <path key={i}
                d={`M ${C},${C} Q ${lft.x},${lft.y} ${tip.x},${tip.y} Q ${rgt.x},${rgt.y} ${C},${C}`}
                fill="#b05224" opacity="0.18" stroke="#d16c3d" strokeWidth="1"
              />
            );
          })}
          <circle cx={C} cy={C} r="174" stroke="#b05224" strokeWidth="2" opacity="0.45"/>
          <circle cx={C} cy={C} r="164" stroke="#7A5C13" strokeWidth="1" opacity="0.3" strokeDasharray="4 6"/>
          {Array.from({ length: 8 }).map((_, i) => {
            const p1 = pt(74, i * 45);
            const p2 = pt(162, i * 45);
            return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#d16c3d" strokeWidth="2" opacity="0.4"/>;
          })}
        </g>

        {/* DEEP BASE CENTRAL HUB */}
        <circle cx={C} cy={C} r="74" fill="#140d0a"  stroke="#D4AF37" strokeWidth="2.5" opacity="0.95"/>
        <circle cx={C} cy={C} r="60" fill="none"     stroke="#b05224" strokeWidth="1.2" opacity="0.5" strokeDasharray="4 4"/>
        <circle cx={C} cy={C} r="46" fill="none"     stroke="#E2E8F0" strokeWidth="1.5" opacity="0.6"/>
        <circle cx={C} cy={C} r="18" fill="#D4AF37"  opacity="0.4"/>
        <circle cx={C} cy={C} r="6"  fill="#E2E8F0"  opacity="0.9"/>
      </svg>
    </div>
  );
}