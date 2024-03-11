/*
  PROMISE
  An object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
  They avoid the "callback hell" by chaining asynchronous operations in a more readable way.
  There is a built-in error handling: the .catch method.

  PROMISE STATIC METHODS
  They take multiple promises and returns a single promise:

    1. PROMISE.ALL()
    This method resolves to an array containing the results of the input promises.
    If any of the input promises is rejected, it rejects inmediately with the value of the rejected promise.

    2. PROMISE.ALLSETTLED()
    This method resolves to an array containing the results of all the input promises (either resolved or rejected).

    3. PROMISE.ANY()
    This method resolves as soon as one of the input promises is resolved, returning the value of that resolved promise.
    If ALL input promises are rejected, it rejects with an AggregateError.

    4. PROMISE.RACE()
    This method resolves as soon as one of the input promises is settled, returning the resolved/rejected value of that promise.
*/

//ONE PROMISE
console.log("\n============SINGLE PROMISE============");
function getWeather() {
  return new Promise(function (resolve, reject) {
    resolve("Sunny");
    //reject("No weather");
  });
}

function onSuccess(data) {
  console.log(`Success: ${data}`);
  console.log("\n============CHAINING PROMISES============"); //NOTE: This is here only to show logs in the proper order
}

function onError(error) {
  console.log(`Error: ${error}`);
  console.log("\n============CHAINING PROMISES============"); //NOTE: This is here only to show logs in the proper order
}

const weatherPromise = getWeather();
weatherPromise.then(onSuccess, onError);

//CHAINING PROMISES
//NOTE: SetTimeout is here to guarantee the code inside runs after the code above
setTimeout(() => {
  function getWeatherCP() {
    return new Promise(function (resolve, reject) {
      resolve("Rainy");
      //   reject("No weather");
    });
  }

  function getWeatherIcon(weather) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch (weather) {
          case "Sunny":
            resolve("☀️");
            break;
          case "Cloudy":
            resolve("☁️");
            break;
          default:
            reject("No icon found!");
        }
      }, 100);
    });
  }

  function onSuccessCP(data) {
    console.log(`Success: ${data}`);
  }

  function onErrorCP(error) {
    console.log(`Error: ${error}`);
  }

  function onFinallyCP() {
    console.log(`Finally: Promise chain completed!`);
    console.log("\n============PROMISE.ALL()============"); //NOTE: This is here only to show logs in the proper order
  }

  getWeatherCP().then(getWeatherIcon).then(onSuccessCP).catch(onErrorCP).finally(onFinallyCP);
}, 1000);

//PROMISE.ALL()
//NOTE: SetTimeout is here to guarantee the code inside runs after the code above
setTimeout(() => {
  const promiseA1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, "Resolved: promiseA1");
    // setTimeout(reject, 300, "Error in promiseA1!");
  });

  const nonPromiseA2 = "Resolved: nonPromiseA2"; //Non-promise

  const promiseA3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Resolved: promiseA3");
  });

  Promise.all([promiseA1, nonPromiseA2, promiseA3])
    .then((values) => {
      console.log(values);
      console.log("\n============PROMISE.ALLSETTLED()============"); //NOTE: This is here only to show logs in the proper order
    })
    .catch((err) => {
      console.log(err);
    });
}, 2000);

//PROMISE.ALLSETTLED()
//NOTE: SetTimeout is here to guarantee the code inside runs after the code above
setTimeout(() => {
  const promiseALL1 = Promise.resolve(3);
  const promiseALL2 = new Promise((resolve, reject) => setTimeout(reject, 100, "foo"));

  Promise.allSettled([promiseALL1, promiseALL2]).then((value) => {
    console.log(value);
    console.log("\n============PROMISE.ANY()============"); //NOTE: This is here only to show logs in the proper order
  });
}, 3000);

//PROMISE.ANY()
//NOTE: SetTimeout is here to guarantee the code inside runs after the code above
setTimeout(() => {
  const slowlyDone = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "slowlyDone promise resolvedk!");
    // setTimeout(reject, 500, "Reject: slowlyDone!");
  });

  const quicklyDone = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "quicklyDone promise resolved!");
    // setTimeout(reject, 100, "Reject: quicklyDone!");
  });

  const rejectedPromiseAny = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "Rejected");
  });

  Promise.any([slowlyDone, quicklyDone, rejectedPromiseAny])
    .then((value) => {
      console.log(value);
      console.log("\n============PROMISE.RACE() - FIRST RESOLVED WINS============"); //NOTE: This is here only to show logs in the proper order
    })
    .catch((err) => {
      console.log(err); //This only triggers when all promises are rejected!
    });
}, 4000);

//PROMISE.RACE(): FIRST RESOLVED WINS
//NOTE: SetTimeout is here to guarantee the code inside runs after the code above
setTimeout(() => {
  const promiseR1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promiseR1 resolved and wins the race!"), 200);
  });

  const promiseR2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promiseR2 resolved and wins the race!"), 100);
  });

  Promise.race([promiseR1, promiseR2])
    .then((response) => {
      console.log(response);
      console.log("\n============PROMISE.RACE() - REJECTED WINS============"); //NOTE: This is here only to show logs in
    })
    .catch((err) => {
      console.log(err);
    });
}, 5000);

//PROMISE.RACE(): REJECTED WINS
//NOTE: SetTimeout is here to guarantee the code inside runs after the code above
setTimeout(() => {
  const promiseR3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("promiseR3 rejected and wins the race!"), 100);
  });

  const promiseR4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promiseR4 resolved and wins the race!"), 200);
  });

  Promise.race([promiseR3, promiseR4])
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}, 6000);
