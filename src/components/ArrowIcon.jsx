// SVG arrows instead of the ↗ / ↑ characters: iOS Safari swaps those glyphs for
// Apple Color Emoji, which renders them as blue boxed emoji instead of thin strokes.
const paths = {
  'up-right': 'M5 11 11 5M6 5h5v5',
  up: 'M8 13V3M4 7l4-4 4 4',
};

export function ArrowIcon({ direction = 'up-right', className = '' }) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" className={`shrink-0 ${className}`}>
      <path d={paths[direction]} />
    </svg>
  );
}
