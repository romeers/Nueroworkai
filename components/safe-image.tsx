import Image, { type ImageProps } from "next/image"

interface SafeImageProps extends Omit<ImageProps, "src"> {
  src: string | null | undefined
  fallbackSrc?: string
}

export default function SafeImage({ src, fallbackSrc = "/chromatic-whirl.png", alt, ...props }: SafeImageProps) {
  // Si src es null, undefined o cadena vacía, usar la imagen de respaldo
  const imageSrc = !src || src === "" ? fallbackSrc : src

  return <Image src={imageSrc || "/placeholder.svg"} alt={alt} {...props} />
}
