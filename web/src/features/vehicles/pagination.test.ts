import { describe, expect, it } from "vitest";
import {
  paginateItems,
  positivePageNumber,
  VEHICLES_PER_PAGE,
} from "@/features/vehicles/pagination";

describe("vehicle pagination", () => {
  const vehicles = Array.from({ length: 17 }, (_, index) => index + 1);

  it("shows ten vehicles on the first page", () => {
    const result = paginateItems(vehicles, 1);

    expect(result.items).toEqual(vehicles.slice(0, VEHICLES_PER_PAGE));
    expect(result.firstItem).toBe(1);
    expect(result.lastItem).toBe(10);
    expect(result.totalPages).toBe(2);
  });

  it("shows the remaining seven vehicles on page two", () => {
    const result = paginateItems(vehicles, 2);

    expect(result.items).toEqual(vehicles.slice(10));
    expect(result.firstItem).toBe(11);
    expect(result.lastItem).toBe(17);
  });

  it("clamps an out-of-range page to the last page", () => {
    expect(paginateItems(vehicles, 99).currentPage).toBe(2);
  });

  it("returns a stable empty state", () => {
    expect(paginateItems([], 2)).toEqual({
      currentPage: 1,
      firstItem: 0,
      lastItem: 0,
      items: [],
      totalPages: 1,
    });
  });

  it.each([
    [undefined, 1],
    ["", 1],
    ["0", 1],
    ["-2", 1],
    ["abc", 1],
    ["2", 2],
  ])("normalises page value %s", (value, expected) => {
    expect(positivePageNumber(value)).toBe(expected);
  });
});
