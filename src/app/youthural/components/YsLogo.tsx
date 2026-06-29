interface Props {
  height?: number;
  bgColor?: string;
}

export function YsLogo({ height = 26, bgColor = '#0A0A0A' }: Props) {
  return (
    <svg viewBox="0 0 140 84" style={{ height, width: 'auto', display: 'block' }}>
      <g fill="none" stroke="currentColor" strokeWidth="4">
        <ellipse cx="70" cy="42" rx="67" ry="40" />
        <ellipse cx="70" cy="42" rx="67" ry="15" />
        <ellipse cx="70" cy="42" rx="22" ry="40" />
        <ellipse cx="70" cy="42" rx="46" ry="40" />
        <line x1="3" y1="42" x2="137" y2="42" />
      </g>
      <rect x="48" y="29" width="44" height="26" fill="currentColor" />
      <text
        x="70"
        y="49"
        textAnchor="middle"
        fontFamily="var(--font-lozung-caps), sans-serif"
        fontWeight="800"
        fontSize="20"
        fill={bgColor}
      >
        ЮС
      </text>
    </svg>
  );
}
