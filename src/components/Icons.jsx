const iconProps = {
  className: "h-6 w-6",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.7",
  viewBox: "0 0 24 24"
};

export function Icon({ name, className = "h-6 w-6" }) {
  const props = { ...iconProps, className };

  switch (name) {
    case "home":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 11.5 12 4l9 7.5M5.5 10.5V20h13V10.5" />
        </svg>
      );
    case "building":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M7 20V6h10v14M10 9h.01M14 9h.01M10 13h.01M14 13h.01" />
        </svg>
      );
    case "layers":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m12 4 8 4-8 4-8-4 8-4Zm8 8-8 4-8-4m16 4-8 4-8-4" />
        </svg>
      );
    case "cube":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m12 3 7 4v10l-7 4-7-4V7l7-4Zm0 0v8m7-4-7 4-7-4" />
        </svg>
      );
    case "sun":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.5M12 18.5V21M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M3 12h2.5M18.5 12H21M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        </svg>
      );
    case "moon":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
        </svg>
      );
    case "menu":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "quote":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 11H5.75A2.75 2.75 0 0 1 8.5 8.25V7A4 4 0 0 0 4.5 11v6H9v-6Zm10 0h-3.25a2.75 2.75 0 0 1 2.75-2.75V7a4 4 0 0 0-4 4v6H19v-6Z" />
        </svg>
      );
    default:
      return null;
  }
}
