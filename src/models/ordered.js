export class OrderedItems {
  constructor(
    orderId,
    enteredUserName,
    enteredCity,
    enteredStreet,
    orderArray
  ) {
    this.orderId = orderId;
    this.name = enteredUserName;
    this.city = enteredCity;
    this.street = enteredStreet;
    this.orders = orderArray;
  }

  getOrderDetails() {
    return `Thank you ${this.name}, delivery to ${this.city}, ${this.street}, ${this.postal}. Order# ${this.orderId}`;
  }

  summarizeOrders() {
    return this.orders;
  }
}
