import React from "react";

type IsoGridBgProps = {
  className?: string;
  grid?: number;          // tamaño del "tile" (px)
  line?: string;          // color línea
  alpha?: number;         // opacidad (0..1)
};

export function IsoGridBg({
  className,
  grid = 50,
  line = "#00d4ff",
  alpha = 0.2,
}: IsoGridBgProps) {
  // Convertir hex a rgb para rgba
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 212, b: 255 };
  };

  const rgb = hexToRgb(line);
  const lineColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
  const lineColorAlt = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * 0.6})`;

  // Para grid isométrico: altura = ancho * sqrt(3) / 2
  const gridHeight = Math.round(grid * 0.866); // sqrt(3)/2 ≈ 0.866

  return (
    <div className={`fixed inset-0 overflow-hidden ${className ?? ""}`}>
      {/* base - fondo negro puro */}
      <div
        className="absolute inset-0"
        style={{
          background: "#000000",
        }}
      />

      {/* grid isométrico */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              30deg,
              transparent 0,
              transparent ${grid - 1}px,
              ${lineColor} ${grid - 1}px,
              ${lineColor} ${grid}px
            ),
            repeating-linear-gradient(
              150deg,
              transparent 0,
              transparent ${grid - 1}px,
              ${lineColor} ${grid - 1}px,
              ${lineColor} ${grid}px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0,
              transparent ${gridHeight - 1}px,
              ${lineColorAlt} ${gridHeight - 1}px,
              ${lineColorAlt} ${gridHeight}px
            )
          `,
          backgroundSize: `${grid * 2}px ${gridHeight * 2}px`,
          backgroundPosition: '0 0',
          maskImage:
            "radial-gradient(ellipse 1400px 900px at 50% 50%, black 35%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 1400px 900px at 50% 50%, black 35%, transparent 75%)",
          filter: "blur(0.4px)",
          opacity: 1,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

