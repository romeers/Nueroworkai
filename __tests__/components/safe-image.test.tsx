import { render, screen } from "@testing-library/react"
import SafeImage from "@/components/safe-image"

describe("SafeImage", () => {
  it("renders the image with correct props when src is provided", () => {
    render(<SafeImage src="/test-image.jpg" alt="Test image" width={100} height={100} />)

    const img = screen.getByRole("img")
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute("alt", "Test image")
    expect(img).toHaveAttribute("src")
  })

  it("renders fallback image when src is null", () => {
    render(<SafeImage src={null} fallbackSrc="/fallback.jpg" alt="Test image" width={100} height={100} />)

    const img = screen.getByRole("img")
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute("alt", "Test image")
    expect(img).toHaveAttribute("src")
  })

  it("renders placeholder when both src and fallbackSrc are null", () => {
    render(<SafeImage src={null} fallbackSrc={null} alt="Test image" width={100} height={100} />)

    const placeholder = screen.getByText("Test image")
    expect(placeholder).toBeInTheDocument()
  })
})
