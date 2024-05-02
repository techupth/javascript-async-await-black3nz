let getUser = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("user data"), 2000);
  });
};

let getOrders = (user) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("orders"), 1000);
  });
};

let getItems = (orders) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("orders items"), 1000);
  });
};

// Start coding here

// วิธีแบบเต็มๆ
// getUser()
//   .then((user) => {
//     return getOrders(user);
//   })
//   .then((orders) => {
//     return getItems(orders);
//   })
//   .then((items) => {
//     console.log(items);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// วิธีแบบสั้นๆ
getUser()
  .then(getOrders)
  .then(getItems)
  .then((items) => {
    console.log(items);
  })
  .catch((error) => {
    console.log(error);
  });
