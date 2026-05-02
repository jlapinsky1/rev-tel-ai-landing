const ICON_NAMES = new Set([
  "arrowRight",
  "barChart",
  "shield",
  "activity",
  "trendingUp",
  "refresh",
  "layers",
  "download",
  "check",
  "alert",
  "eye",
  "building",
]);

export default function Icon({ name = "check", className = "h-5 w-5" }) {
  const safeName = ICON_NAMES.has(name) ? name : "check";
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (safeName === "arrowRight") {
    return (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m13 5 7 7-7 7" />
      </svg>
    );
  }
  if (safeName === "barChart") {
    return (
      <svg {...common}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <rect x="7" y="11" width="3" height="5" rx="1" />
        <rect x="12" y="8" width="3" height="8" rx="1" />
        <rect x="17" y="5" width="3" height="11" rx="1" />
      </svg>
    );
  }
  if (safeName === "shield") {
    return (
      <svg {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    );
  }
  if (safeName === "activity") {
    return (
      <svg {...common}>
        <path d="M22 12h-4l-3 8L9 4l-3 8H2" />
      </svg>
    );
  }
  if (safeName === "trendingUp") {
    return (
      <svg {...common}>
        <path d="m3 17 6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </svg>
    );
  }
  if (safeName === "refresh") {
    return (
      <svg {...common}>
        <path d="M21 12a9 9 0 0 1-15.5 6.2" />
        <path d="M3 12A9 9 0 0 1 18.5 5.8" />
        <path d="M18 2v4h4" />
        <path d="M6 22v-4H2" />
      </svg>
    );
  }
  if (safeName === "layers") {
    return (
      <svg {...common}>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </svg>
    );
  }
  if (safeName === "download") {
    return (
      <svg {...common}>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
    );
  }
  if (safeName === "alert") {
    return (
      <svg {...common}>
        <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    );
  }
  if (safeName === "eye") {
    return (
      <svg {...common}>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  if (safeName === "building") {
    return (
      <svg {...common}>
        <path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" />
        <path d="M3 21h18" />
        <path d="M8 7h1" />
        <path d="M12 7h1" />
        <path d="M8 11h1" />
        <path d="M12 11h1" />
        <path d="M8 15h1" />
        <path d="M12 15h1" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  );
}
