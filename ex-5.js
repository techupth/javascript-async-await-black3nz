// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
async function displayProfileError() {
  try {
    const profile = await getJohnProfile();
    console.log(profile); // This line will not be executed since the promise rejects
  } catch (error) {
    console.log(error); // Catching and logging the error object
  }
}

displayProfileError();