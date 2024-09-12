const locale = navigator.language;
const currency = "EUR";

export const getCurrencySymbol = () => {
  if (typeof navigator === "undefined") {
    return "";
  } else {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    })
      .format(0)
      .replace(/\d/g, "")
      .trim();
  }
};
