let getUser = async () => {
  return "user data";
};

let getOrders = async (user) => {
  return "orders";
};

let getItems = async (orders) => {
  return "orders items";
};

async function asynchronousFunction() {
  // Start coding here

  let user = await getUser();
  let orders = await getOrders(user);
  let items = await getOrders(orders);

  console.log(items);
}

asynchronousFunction();
