"use client";

import type { FormEvent } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";

type EnquiryFormProps = {
  kind: "contact" | "finance" | "valuation";
  recipient: string;
};

const fieldClassName =
  "min-h-13 w-full border border-[#b7c7d3] bg-white px-4 text-base text-[#142a40] placeholder:text-[#8295a5]";
const labelClassName =
  "mb-2 block text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#526a7f]";

function valueFrom(formData: FormData, name: string): string {
  return String(formData.get(name) ?? "").trim();
}

function pounds(value: string): string {
  if (!value) {
    return "";
  }

  return `GBP ${Number(value).toLocaleString("en-GB")}`;
}

export function EnquiryForm({ kind, recipient }: EnquiryFormProps) {
  const idPrefix = `${kind}-enquiry`;
  const isValuation = kind === "valuation";
  const isFinance = kind === "finance";
  const isContact = kind === "contact";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = valueFrom(formData, "name");
    const email = valueFrom(formData, "email");
    const phone = valueFrom(formData, "phone");
    const preferredContact = valueFrom(formData, "preferredContact");
    const message = valueFrom(formData, "message");

    const enquiryDetails: Array<[string, string]> = isValuation
      ? [
          ["Registration", valueFrom(formData, "registration")],
          ["Make and model", valueFrom(formData, "makeModel")],
          ["Mileage", valueFrom(formData, "mileage")],
          ["Vehicle condition", valueFrom(formData, "condition")],
          ["Service history", valueFrom(formData, "serviceHistory")],
          ["Outstanding finance", valueFrom(formData, "outstandingFinance")],
        ]
      : isFinance
        ? [
            ["Vehicle or stock reference", valueFrom(formData, "vehicle")],
            ["Available deposit", pounds(valueFrom(formData, "deposit"))],
            [
              "Target monthly budget",
              pounds(valueFrom(formData, "monthlyBudget")),
            ],
          ]
        : [["Enquiry type", valueFrom(formData, "enquiryType")]];

    const body = [
      `Hello German Engineering,`,
      "",
      isValuation
        ? "I would like to request a valuation for my vehicle."
        : isFinance
          ? "I would like to discuss vehicle finance."
          : "I would like to make a general enquiry.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Telephone: ${phone}`,
      `Preferred contact: ${preferredContact}`,
      ...enquiryDetails
        .filter(([, value]) => value)
        .map(([label, value]) => `${label}: ${value}`),
      ...(message
        ? ["", isContact ? "Message:" : "Additional details:", message]
        : []),
    ].join("\n");

    const subject = isValuation
      ? `Vehicle valuation enquiry - ${valueFrom(formData, "registration")}`
      : isFinance
        ? `Vehicle finance enquiry - ${valueFrom(formData, "vehicle")}`
        : `Website enquiry - ${valueFrom(formData, "enquiryType")}`;

    window.location.assign(
      `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6"
      aria-describedby={`${idPrefix}-delivery-note`}
    >
      <p className="text-sm leading-6 text-[#526a7f]">
        Fields marked <span aria-hidden="true">*</span> are required.
      </p>

      {isValuation ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClassName} htmlFor={`${idPrefix}-registration`}>
              Registration *
            </label>
            <input
              className={fieldClassName}
              id={`${idPrefix}-registration`}
              name="registration"
              autoCapitalize="characters"
              autoComplete="off"
              maxLength={12}
              placeholder="AB12 CDE"
              required
            />
          </div>
          <div>
            <label className={labelClassName} htmlFor={`${idPrefix}-mileage`}>
              Current mileage *
            </label>
            <input
              className={fieldClassName}
              id={`${idPrefix}-mileage`}
              name="mileage"
              type="number"
              min="0"
              step="100"
              inputMode="numeric"
              placeholder="45000"
              required
            />
          </div>
          <div>
            <label className={labelClassName} htmlFor={`${idPrefix}-make-model`}>
              Make and model *
            </label>
            <input
              className={fieldClassName}
              id={`${idPrefix}-make-model`}
              name="makeModel"
              placeholder="Audi A4"
              required
            />
          </div>
          <div>
            <label className={labelClassName} htmlFor={`${idPrefix}-condition`}>
              Vehicle condition
            </label>
            <select
              className={fieldClassName}
              id={`${idPrefix}-condition`}
              name="condition"
              defaultValue=""
            >
              <option value="">Select condition</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="Needs attention">Needs attention</option>
            </select>
          </div>
          <div>
            <label
              className={labelClassName}
              htmlFor={`${idPrefix}-service-history`}
            >
              Service history
            </label>
            <select
              className={fieldClassName}
              id={`${idPrefix}-service-history`}
              name="serviceHistory"
              defaultValue=""
            >
              <option value="">Select service history</option>
              <option value="Full service history">Full service history</option>
              <option value="Part service history">Part service history</option>
              <option value="No service history">No service history</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
          <div>
            <label
              className={labelClassName}
              htmlFor={`${idPrefix}-outstanding-finance`}
            >
              Outstanding finance
            </label>
            <select
              className={fieldClassName}
              id={`${idPrefix}-outstanding-finance`}
              name="outstandingFinance"
              defaultValue=""
            >
              <option value="">Select an option</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
        </div>
      ) : isFinance ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={labelClassName} htmlFor={`${idPrefix}-vehicle`}>
              Vehicle or stock reference *
            </label>
            <input
              className={fieldClassName}
              id={`${idPrefix}-vehicle`}
              name="vehicle"
              placeholder="The vehicle you are interested in"
              required
            />
          </div>
          <div>
            <label className={labelClassName} htmlFor={`${idPrefix}-deposit`}>
              Available deposit
            </label>
            <div className="relative">
              <span
                className="pointer-events-none absolute inset-y-0 left-4 flex items-center font-bold text-[#526a7f]"
                aria-hidden="true"
              >
                £
              </span>
              <input
                className={`${fieldClassName} pl-9`}
                id={`${idPrefix}-deposit`}
                name="deposit"
                type="number"
                min="0"
                step="100"
                inputMode="numeric"
                placeholder="2000"
              />
            </div>
          </div>
          <div>
            <label
              className={labelClassName}
              htmlFor={`${idPrefix}-monthly-budget`}
            >
              Target monthly budget
            </label>
            <div className="relative">
              <span
                className="pointer-events-none absolute inset-y-0 left-4 flex items-center font-bold text-[#526a7f]"
                aria-hidden="true"
              >
                £
              </span>
              <input
                className={`${fieldClassName} pl-9`}
                id={`${idPrefix}-monthly-budget`}
                name="monthlyBudget"
                type="number"
                min="0"
                step="10"
                inputMode="numeric"
                placeholder="300"
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <label
            className={labelClassName}
            htmlFor={`${idPrefix}-enquiry-type`}
          >
            What can we help with? *
          </label>
          <select
            className={fieldClassName}
            id={`${idPrefix}-enquiry-type`}
            name="enquiryType"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select an enquiry type
            </option>
            <option value="Vehicle sales">Vehicle sales</option>
            <option value="Vehicle sourcing">Vehicle sourcing</option>
            <option value="Servicing or repairs">Servicing or repairs</option>
            <option value="Bodywork">Bodywork</option>
            <option value="General question">General question</option>
          </select>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClassName} htmlFor={`${idPrefix}-name`}>
            Full name *
          </label>
          <input
            className={fieldClassName}
            id={`${idPrefix}-name`}
            name="name"
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label className={labelClassName} htmlFor={`${idPrefix}-phone`}>
            Telephone *
          </label>
          <input
            className={fieldClassName}
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
          />
        </div>
        <div>
          <label className={labelClassName} htmlFor={`${idPrefix}-email`}>
            Email *
          </label>
          <input
            className={fieldClassName}
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label
            className={labelClassName}
            htmlFor={`${idPrefix}-preferred-contact`}
          >
            Preferred contact method
          </label>
          <select
            className={fieldClassName}
            id={`${idPrefix}-preferred-contact`}
            name="preferredContact"
            defaultValue="Either"
          >
            <option value="Either">Either phone or email</option>
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClassName} htmlFor={`${idPrefix}-message`}>
          {isContact ? "Your message *" : "Additional details"}
        </label>
        <textarea
          className={`${fieldClassName} min-h-36 py-4`}
          id={`${idPrefix}-message`}
          name="message"
          required={isContact}
          placeholder={
            isValuation
              ? "Service history, outstanding finance, damage or anything else we should know."
              : isFinance
                ? "Tell us about your requirements or the best time to contact you."
                : "Tell us how the team can help."
          }
        />
      </div>

      <label className="flex items-start gap-3 text-sm leading-6 text-[#38516a]">
        <input
          className="mt-1 h-5 w-5 shrink-0 accent-[#1266a8]"
          name="consent"
          type="checkbox"
          required
        />
        <span>
          I agree that German Engineering may use these details to respond to
          my enquiry. *
        </span>
      </label>

      <div className="border-t border-[#dce5ec] pt-6">
        <button className="cta cta-primary inline-flex" type="submit">
          <span>Continue to email</span>
          <ArrowRightIcon className="cta-arrow" />
        </button>
        <p
          id={`${idPrefix}-delivery-note`}
          className="mt-4 max-w-xl text-xs leading-6 text-[#6e8396]"
        >
          This opens your email app with the enquiry details ready to review
          and send.
        </p>
      </div>
    </form>
  );
}
