import Image, { type ImageProps } from "next/image"

interface SafeImageProps extends Omit<ImageProps, "src"> {
  src: string | null | undefined
  fallbackSrc?: string
}

export default function SafeImage({ src, fallbackSrc = "/chromatic-whirl.png", alt, ...props }: SafeImageProps) {
  // Si src es null, undefined o cadena vacía, usar la imagen de respaldo
  const imageSrc = src && src !== "" ? src : fallbackSrc

  // No renderizar nada si no hay una fuente válida (ni src ni fallback)
  if (!imageSrc || imageSrc === "") {
    return (
      <div
        className={`image-placeholder ${props.className || ""}`}
        style={{
          width: typeof props.width === "number" ? `${props.width}px` : props.width,
          height: typeof props.height === "number" ? `${props.height}px` : props.height,
          backgroundColor: "#f3f4f6", // Un color gris claro para el placeholder
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...props.style,
        }}
        aria-label={`Placeholder para: ${alt}`}
      >
        <span className="text-xs text-gray-400">{alt || "Imagen"}</span>
      </div>
    )
  }

  // Asegurarse de que nunca se pase una cadena vacía a Image
  return <Image src={imageSrc || "/placeholder.svg"} alt={alt || ""} {...props} />
}
