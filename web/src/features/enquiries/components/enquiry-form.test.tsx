import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { EnquiryForm } from "@/features/enquiries/components/enquiry-form";

describe("EnquiryForm", () => {
  it("requires the general contact fields and consent", async () => {
    const user = userEvent.setup();

    render(
      <EnquiryForm kind="contact" recipient="enquiries@example.test" />,
    );

    expect(
      screen.getByRole("combobox", { name: /what can we help with/i }),
    ).toBeRequired();
    expect(screen.getByRole("textbox", { name: /full name/i })).toBeRequired();
    expect(screen.getByRole("textbox", { name: /telephone/i })).toBeRequired();
    expect(screen.getByRole("textbox", { name: /email/i })).toBeRequired();
    expect(screen.getByRole("textbox", { name: /your message/i })).toBeRequired();
    expect(screen.getByRole("checkbox")).toBeRequired();
    expect(screen.getByRole("link", { name: /privacy notice/i })).toHaveAttribute(
      "href",
      "/privacy",
    );

    const form = screen.getByRole("button", {
      name: /continue to email/i,
    }).closest("form");

    expect(form).not.toBeNull();
    expect(form).not.toBeValid();

    await user.selectOptions(
      screen.getByRole("combobox", { name: /what can we help with/i }),
      "General question",
    );
    await user.type(
      screen.getByRole("textbox", { name: /full name/i }),
      "Test Customer",
    );
    await user.type(
      screen.getByRole("textbox", { name: /telephone/i }),
      "01440 000000",
    );
    await user.type(
      screen.getByRole("textbox", { name: /email/i }),
      "customer@example.test",
    );
    await user.type(
      screen.getByRole("textbox", { name: /your message/i }),
      "Please contact me.",
    );
    await user.click(screen.getByRole("checkbox"));

    expect(form).toBeValid();
  });

  it("renders vehicle and scheduling fields for a workshop enquiry", () => {
    render(
      <EnquiryForm kind="workshop" recipient="workshop@example.test" />,
    );

    expect(
      screen.getByRole("textbox", { name: /registration/i }),
    ).toBeRequired();
    expect(
      screen.getByRole("spinbutton", { name: /current mileage/i }),
    ).toBeRequired();
    expect(
      screen.getByRole("combobox", { name: /requested work/i }),
    ).toBeRequired();
    expect(screen.getByLabelText(/preferred date/i)).toBeRequired();
    expect(
      screen.getByRole("combobox", { name: /preferred contact method/i }),
    ).toHaveValue("Either");
  });
});
