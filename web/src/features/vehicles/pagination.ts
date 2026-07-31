export const VEHICLES_PER_PAGE = 10;

export type PaginationResult<T> = {
  currentPage: number;
  firstItem: number;
  lastItem: number;
  items: T[];
  totalPages: number;
};

export function positivePageNumber(value: string | undefined): number {
  if (!value || !/^\d+$/.test(value)) {
    return 1;
  }

  const parsed = Number(value);
  return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : 1;
}

export function paginateItems<T>(
  items: T[],
  requestedPage: number,
  pageSize = VEHICLES_PER_PAGE,
): PaginationResult<T> {
  if (!Number.isSafeInteger(pageSize) || pageSize <= 0) {
    throw new RangeError("Page size must be a positive integer.");
  }

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
  const firstItemIndex = (currentPage - 1) * pageSize;

  return {
    currentPage,
    firstItem: items.length === 0 ? 0 : firstItemIndex + 1,
    lastItem: Math.min(firstItemIndex + pageSize, items.length),
    items: items.slice(firstItemIndex, firstItemIndex + pageSize),
    totalPages,
  };
}
