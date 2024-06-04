/*
  THROTTILING
  Optimization technique to execute a function once in every specified time interval.

  NOTE: If not used properly, this can introduce loss of information/accuracy in your code.
*/

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_passed");
const count = document.querySelector(".increment_count");

let pressedCount = 0;
let triggerCount = 0;

//CUSTOM THROTTLER
const myThrottle = (callback, delay) => {
  let isRunning = false;
  return function (...args) {
    if (!isRunning) {
      isRunning = true;
      callback(...args);
      setTimeout(() => {
        isRunning = false;
      }, delay);
    }
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

const increaseTrigger = myThrottle(increaseTriggerCounter, 800);

btn.addEventListener("click", () => {
  increasePressed();
  increaseTrigger();
});
