export const convertToCommaSeprated = (number: number | string): string =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
