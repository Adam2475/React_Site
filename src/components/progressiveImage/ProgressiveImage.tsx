import { useState } from "react";

interface ProgressiveImageProps {
  src: string;         // the high-res image
  placeholder: string; // the low-res image
  alt: string;
  className?: string;
}

function ProgressiveImage({ src, placeholder, alt, className }: ProgressiveImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Low-res blurred image */}
      <img
        src={placeholder}
        alt={alt}
        className={className}
        style={{
          filter: "blur(20px)",
          transform: "scale(1.05)",
          transition: "opacity 0.5s ease",
          opacity: loaded ? 0 : 1,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* High-res image */}
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setLoaded(true)}
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s ease",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default ProgressiveImage;
