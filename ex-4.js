let getUser = async () => {
  return "User data from server";
};

async function asynchronousFunction() {
  let user = await getUser();
  console.log(user);
}

asynchronousFunction();
