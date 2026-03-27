export function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Corner Technical Lines */}
      <div
        className="absolute top-0 left-0 w-64 h-64 animate-fade-in opacity-0"
        style={{ animationDelay: "0s", animationFillMode: "forwards" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <line x1="0" y1="0" x2="200" y2="0" stroke="#2563EB" strokeWidth="2" />
          <line x1="0" y1="0" x2="0" y2="200" stroke="#2563EB" strokeWidth="2" />
          <circle cx="0" cy="0" r="4" fill="#2563EB" />
          <circle cx="40" cy="0" r="2" fill="#2563EB" />
          <circle cx="0" cy="40" r="2" fill="#2563EB" />
          <line x1="40" y1="0" x2="40" y2="40" stroke="#2563EB" strokeWidth="1" strokeDasharray="2,2" />
          <line x1="0" y1="40" x2="40" y2="40" stroke="#2563EB" strokeWidth="1" strokeDasharray="2,2" />
        </svg>
      </div>

      <div
        className="absolute top-0 right-0 w-64 h-64 animate-fade-in opacity-0"
        style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <line x1="0" y1="0" x2="200" y2="0" stroke="#2563EB" strokeWidth="2" />
          <line x1="200" y1="0" x2="200" y2="200" stroke="#2563EB" strokeWidth="2" />
          <circle cx="200" cy="0" r="4" fill="#2563EB" />
          <circle cx="160" cy="0" r="2" fill="#2563EB" />
          <circle cx="200" cy="40" r="2" fill="#2563EB" />
        </svg>
      </div>

      <div
        className="absolute bottom-0 left-0 w-64 h-64 animate-fade-in opacity-0"
        style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <line x1="0" y1="200" x2="200" y2="200" stroke="#2563EB" strokeWidth="2" />
          <line x1="0" y1="0" x2="0" y2="200" stroke="#2563EB" strokeWidth="2" />
          <circle cx="0" cy="200" r="4" fill="#2563EB" />
          <circle cx="40" cy="200" r="2" fill="#2563EB" />
          <circle cx="0" cy="160" r="2" fill="#2563EB" />
        </svg>
      </div>

      <div
        className="absolute bottom-0 right-0 w-64 h-64 animate-fade-in opacity-0"
        style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <line x1="0" y1="200" x2="200" y2="200" stroke="#2563EB" strokeWidth="2" />
          <line x1="200" y1="0" x2="200" y2="200" stroke="#2563EB" strokeWidth="2" />
          <circle cx="200" cy="200" r="4" fill="#2563EB" />
          <circle cx="160" cy="200" r="2" fill="#2563EB" />
          <circle cx="200" cy="160" r="2" fill="#2563EB" />
        </svg>
      </div>

      {/* Floating Tech Elements — CSS-only infinite animations */}
      <div
        className="absolute top-1/4 left-1/4 w-32 h-32 animate-float-bg-up"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            fill="none"
            stroke="#2563EB"
            strokeWidth="1"
            strokeDasharray="4,4"
          />
          <circle cx="50" cy="50" r="3" fill="#2563EB" />
        </svg>
      </div>

      <div
        className="absolute top-2/3 right-1/4 w-24 h-24 animate-float-bg-down"
        style={{ animationDelay: "1s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#2563EB"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
        </svg>
      </div>

      {/* Data Stream Lines */}
      <div
        className="absolute left-1/2 top-0 h-full w-px animate-scale-y-in"
        style={{ transformOrigin: "top" }}
      >
        <div className="h-full bg-gradient-to-b from-transparent via-blue-200/20 to-transparent" />
      </div>

      <div
        className="absolute inset-0 animate-fade-in opacity-0"
        style={{
          animationDelay: "0.8s",
          animationFillMode: "forwards",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)",
          backgroundSize: "3px 3px",
          mixBlendMode: "soft-light",
        }}
      />
    </div>
  );
}
