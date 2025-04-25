import { render, screen } from "@testing-library/react"
import ToolCard from "@/components/tool-card"

describe("ToolCard", () => {
  const defaultProps = {
    name: "Test Tool",
    description: "This is a test tool description",
    imageUrl: "/test-image.jpg",
    category: "Test Category",
    url: "/herramientas/test-tool",
  }

  it("renders the tool card with correct information", () => {
    render(<ToolCard {...defaultProps} />)

    expect(screen.getByText("Test Tool")).toBeInTheDocument()
    expect(screen.getByText("This is a test tool description")).toBeInTheDocument()
    expect(screen.getByText("Test Category")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /ver análisis/i })).toHaveAttribute("href", "/herramientas/test-tool")
    expect(screen.getByRole("link", { name: /probar/i })).toHaveAttribute("href", "/herramientas/test-tool#probar")
  })

  it("renders external link with correct attributes when url is external", () => {
    render(<ToolCard {...defaultProps} url="https://external-url.com" />)

    const externalLink = screen.getByRole("link", { name: /probar/i })
    expect(externalLink).toHaveAttribute("href", "https://external-url.com")
    expect(externalLink).toHaveAttribute("target", "_blank")
    expect(externalLink).toHaveAttribute("rel", "noopener sponsored")
  })

  it("renders featured badge when featured is true", () => {
    render(<ToolCard {...defaultProps} featured={true} />)

    expect(screen.getByText("Destacado")).toBeInTheDocument()
  })

  it("renders verified badge when verified is true", () => {
    render(<ToolCard {...defaultProps} verified={true} />)

    expect(screen.getByText("Verificado")).toBeInTheDocument()
  })

  it("renders score when provided", () => {
    render(<ToolCard {...defaultProps} score={9.5} />)

    expect(screen.getByText("9.5")).toBeInTheDocument()
  })

  it("renders special offer when provided", () => {
    render(<ToolCard {...defaultProps} specialOffer="20% off" />)

    expect(screen.getByText("20% off")).toBeInTheDocument()
  })
})
