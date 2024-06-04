/*
  DEBOUNCING
  Optimization technique to execute a function only when the user stops performing a certain action for a specified amount of time.

  NOTE: If not used properly, this can introduce latency in the user interface.
*/

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_passed");
const count = document.querySelector(".increment_count");

let pressedCount = 0;
let triggerCount = 0;

//CUSTOM DEBOUNCER
const myDebouncer = (callback, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

const increasePressed = () => {
  pressedCount += 1;
  btnPress.innerHTML = pressedCount;
};

const increaseTriggerCounter = () => {
  triggerCount += 1;
  count.innerHTML = triggerCount;
};

const increaseTrigger = myDebouncer(increaseTriggerCounter, 800);

btn.addEventListener("click", () => {
  increasePressed();
  increaseTrigger();
});
