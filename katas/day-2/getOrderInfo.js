function getOrderInfo(customer) {
  const copyCustomer = { ...customer };
  const newCustomerObj = Object.fromEntries(
    Object.entries(copyCustomer).filter(
      ([key]) =>
        key === "userId" || key === "shippingAddress" || key === "orderId"
    )
  );

  return newCustomerObj;
}

module.exports = getOrderInfo;
