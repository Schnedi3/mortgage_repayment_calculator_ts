export const locale = navigator.language;
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

export const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const key = e.key;
  const value = e.currentTarget.value;

  if (
    !/[0-9.,]/.test(key) &&
    !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"].includes(key)
  ) {
    e.preventDefault();
  }

  if (
    (key === "." || key === ",") &&
    (value.includes(".") || value.includes(",") || value === "")
  ) {
    e.preventDefault();
  }
};

export const formatValue = (value: string) => {
  const resValue = parseFloat(value);

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(resValue);
};
