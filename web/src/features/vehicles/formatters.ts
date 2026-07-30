const currencyFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("en-GB");

export function formatPrice(price: number): string {
  return currencyFormatter.format(price);
}

export function formatMileage(mileage: number): string {
  return `${numberFormatter.format(mileage)} miles`;
}
