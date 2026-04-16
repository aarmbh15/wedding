import React from "react";

const positions = {
  br: "right-4 bottom-4",
  bl: "left-4 bottom-4",
  tr: "right-4 top-4",
  tl: "left-4 top-4",
};

const tooltipSide = {
  br: "left",
  tr: "left",
  bl: "right",
  tl: "right",
};

export default function FloatingWhatsApp({
  phone = "9579328262",
  message = "Hi! I’d like to know more about your services.",
  label = "Chat on WhatsApp",
  position = "br",
  size = 44, // smaller outer circle size
  showOnScroll = false,
  className = "",
}) {
  const [visible, setVisible] = React.useState(!showOnScroll);

  React.useEffect(() => {
    if (!showOnScroll) return;
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showOnScroll]);

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const side = tooltipSide[position] ?? "left";

  const tipPos =
    side === "left"
      ? "md:right-full md:mr-2"
      : "md:left-full  md:ml-2";

  const tipAnim =
    side === "left"
      ? "md:translate-x-2 group-hover:md:translate-x-0"
      : "md:-translate-x-2 group-hover:md:translate-x-0";

  return (
    <div
      className={`fixed z-50 ${positions[position] ?? positions.br} ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`group relative block rounded-full bg-green-500 text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-300 active:scale-95 ${className}`}
        style={{ width: size, height: size }}
      >
        {/* WhatsApp icon stays large */}
        <span className="grid h-full w-full place-items-center">
          <svg
            viewBox="0 0 32 32"
            role="img"
            aria-hidden="true"
            className="h-6 w-6" // keeps icon same size as before
          >
            <path
              d="M19.11 17.41c-.29-.15-1.7-.83-1.96-.92-.27-.1-.46-.15-.65.15-.19.29-.75.92-.92 1.11-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.56-.89-2.14-.23-.55-.47-.48-.65-.49-.17-.01-.36-.01-.55-.01s-.51.07-.78.36c-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.02c.15.19 2.07 3.17 5.02 4.45.7.3 1.24.48 1.66.62.7.22 1.34.19 1.85.12.56-.08 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34zM26.7 5.29C23.82 2.41 20.09 1 16.1 1 8.34 1 2 7.34 2 15.1c0 2.56.67 5.05 1.95 7.26L2 31l8.84-1.86c2.14 1.16 4.56 1.77 7.06 1.77 7.76 0 14.1-6.34 14.1-14.1 0-3.99-1.41-7.72-4.29-10.6zM16.1 28.15c-2.32 0-4.6-.62-6.59-1.79l-.47-.28-5.24 1.1 1.11-5.11-.3-.52C3.33 19.48 2.72 17.32 2.72 15.1c0-7.38 6-13.38 13.38-13.38 3.57 0 6.92 1.39 9.44 3.91 2.52 2.52 3.91 5.87 3.91 9.44 0 7.38-6 13.38-13.38 13.38z"
              fill="currentColor"
            />
          </svg>
        </span>

        {/* Tooltip with text (desktop hover only) */}
        <span
          className={
            `pointer-events-none absolute top-1/2 -translate-y-1/2 hidden md:block
             ${tipPos} ${tipAnim}
             opacity-0 group-hover:md:opacity-100
             transition-all duration-200
             rounded-full bg-gray-900 text-white text-xs font-medium
             px-3 py-1 shadow-lg whitespace-nowrap`
          }
        >
          {label}
        </span>
      </a>
    </div>
  );
}
