export function formatMoney(moneyValue: number) {
  return moneyValue.toLocaleString("fr-ma", {
    style: "currency",
    currency: "MAD",
  });
}
