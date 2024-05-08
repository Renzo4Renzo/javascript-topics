/*
  ASYNC/AWAIT
  Special syntax to write asynchronous code that looks and behaves like synchronous code.

  The "async" keyword declares a function that returns a promise. 
  The "await" keyboard waits for a promise to resolve before continuing with the execution.
  
  Better readability: it enables to handle promises without .then() and .catch() method chaining and nested callbacks, and uses try/catch blocks for error handling.

  NOTE: Async/await is not used for creating promises, only for handling them.
*/

async function regularAsyncAwait() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // throw new Error("We couldn't connect to the server!");
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

const arrowAsyncAwait = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/3");
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

async function runSequentially() {
  console.log("================ASYNC/AWAIT================");
  await regularAsyncAwait();

  console.log("================ASYNC/AWAIT IN IIFE================");
  await (async function () {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  })();

  console.log("================ASYNC/AWAIT IN ARROW FUNCTIONS================");
  await arrowAsyncAwait();
}

runSequentially();
