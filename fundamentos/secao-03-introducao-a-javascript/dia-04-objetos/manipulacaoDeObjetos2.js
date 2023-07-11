const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  return `Olá, ${fullOrder["order"]["delivery"]["deliveryPerson"]}, entrega para: ${fullOrder["name"]}, telefone: ${fullOrder["phoneNumber"]}, ${fullOrder["address"]["street"]}, numero: ${fullOrder["address"]["number"]}, ap: ${fullOrder["address"]["apartment"]}.`;
};

console.log(customerInfo(order));

order.order.delivery.deliveryPerson = "Luiz Silva";
order.order.pizza.marguerita.price = 50;

const orderModifier = (fullOrder) => {
  return `Olá, ${fullOrder["order"]["delivery"]["deliveryPerson"]}, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${fullOrder["order"]["pizza"]["marguerita"]["price"]},00.`;
};

console.log(orderModifier(order));
