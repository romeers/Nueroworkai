import { type NextRequest, NextResponse } from "next/server"
import sharp from "sharp"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const imageUrl = searchParams.get("url")
    const width = Number.parseInt(searchParams.get("w") || "20", 10)
    const quality = Number.parseInt(searchParams.get("q") || "10", 10)

    if (!imageUrl || imageUrl === "") {
      return NextResponse.json({ error: "Missing or empty image URL" }, { status: 400 })
    }

    // Fetch the image
    const response = await fetch(imageUrl)
    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch image" }, { status: 500 })
    }

    const buffer = await response.arrayBuffer()

    // Process the image with sharp
    const processedImageBuffer = await sharp(Buffer.from(buffer)).resize(width).jpeg({ quality }).toBuffer()

    // Return the processed image
    return new NextResponse(processedImageBuffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch (error) {
    console.error("Error processing image:", error)
    return NextResponse.json({ error: "Failed to process image" }, { status: 500 })
  }
}
