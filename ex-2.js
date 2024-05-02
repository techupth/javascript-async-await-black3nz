let getEmployeeData = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => reject("👿 Failed to request data from server"), 2000);
  });
};

// Start coding here

getEmployeeData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
