export function pendingValue(amount, payments) {
  const paymentAmount = payments.map(payment => payment.amount).reduce((a, b) => a + b, 0);

  return amount - paymentAmount;
}
