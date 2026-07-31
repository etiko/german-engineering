export function normalizeVehicleFacet(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ");
}

export function findVehicleFacet(
  value: string | undefined,
  options: string[],
): string {
  if (!value) {
    return "";
  }

  const normalizedValue = normalizeVehicleFacet(value);
  return (
    options.find(
      (option) => normalizeVehicleFacet(option) === normalizedValue,
    ) ?? value
  );
}
