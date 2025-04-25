import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import EmailSubscriptionForm from "@/components/email-subscription-form"

describe("EmailSubscriptionForm", () => {
  it("renders the form with email input and submit button", () => {
    render(<EmailSubscriptionForm onSuccess={jest.fn()} />)

    expect(screen.getByRole("textbox", { name: /correo electrónico/i })).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  it("shows name field when includeName is true", () => {
    render(<EmailSubscriptionForm onSuccess={jest.fn()} includeName={true} />)

    expect(screen.getByRole("textbox", { name: /tu nombre/i })).toBeInTheDocument()
    expect(screen.getByRole("textbox", { name: /correo electrónico/i })).toBeInTheDocument()
  })

  it("calls onSuccess when form is submitted successfully", async () => {
    const onSuccess = jest.fn()
    render(<EmailSubscriptionForm onSuccess={onSuccess} />)

    fireEvent.change(screen.getByRole("textbox", { name: /correo electrónico/i }), {
      target: { value: "test@example.com" },
    })

    fireEvent.click(screen.getByRole("button"))

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalledWith(
        expect.objectContaining({
          email: "test@example.com",
        }),
      )
    })
  })

  it("shows error message for invalid email", async () => {
    render(<EmailSubscriptionForm onSuccess={jest.fn()} />)

    fireEvent.change(screen.getByRole("textbox", { name: /correo electrónico/i }), {
      target: { value: "invalid-email" },
    })

    fireEvent.click(screen.getByRole("button"))

    await waitFor(() => {
      expect(screen.getByText(/introduce un email válido/i)).toBeInTheDocument()
    })
  })
})
