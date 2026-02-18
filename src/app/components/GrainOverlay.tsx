export function GrainOverlay() {
  return (
    <>
      <svg className="hidden">
        <defs>
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0 0.05" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
      <div
        className="fixed inset-0 pointer-events-none z-[100] opacity-[0.04]"
        style={{
          filter: 'url(#noise)',
          mixBlendMode: 'overlay',
        }}
      />
    </>
  );
}
