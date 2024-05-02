let getUser = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("user data"), 1000);
  });
};

// Start coding here

getUser().then((data) => {
  console.log(data);
});
