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
    case "whatsapp":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.2 20.1 8.1 16.7A7.9 7.9 0 1 1 12 20a7.9 7.9 0 0 1-3.8-1l-1 .3Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.8 9.6c.2-.5.5-.5.7-.5h.6c.2 0 .4 0 .5.4l.6 1.4c.1.2.1.4 0 .6l-.4.5c-.2.2-.1.4 0 .6.4.7 1 1.3 1.8 1.7.2.1.4.1.5 0l.6-.4c.2-.1.4-.1.6 0l1.3.6c.4.2.4.4.4.6v.6c0 .2-.1.5-.5.7-.5.2-1 .3-1.5.2-1-.2-2-.7-3.1-1.7-1.3-1.1-2-2.3-2.2-3.4-.1-.5 0-1 .3-1.4Z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="16.5" cy="7.5" r="0.7" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 8h2V4h-2.5C10.9 4 10 5.5 10 7.5V10H8v4h2v6h4v-6h2.3l.7-4H14V8Z" />
        </svg>
      );
    default:
      return null;
  }
}
