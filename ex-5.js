let getEmployee = async () => {
  throw new Error("👿 Failed to request data from server"); // บรรทัดนี้เป็นการสมมุติว่ามี Error เกิดขึ้นใน getEmployee
  return "Employee data from server";
};

async function asynchronousFunction() {
  // Start coding here
  try {
    let employee = await getEmployee();
    console.log(employee);
  } catch (error) {
    console.log(error);
  }
}

asynchronousFunction();
