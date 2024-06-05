/*
    EVENTS
    An action that happens in the system and produces a signal.
    Event handlers (listeners) are used to react to these signals: this is called "registering an event handler".

    EVENT PROPAGATION
    The process where an event travels across elements in the Document Object Model (DOM).

    PROPAGATION PHASES
    -Capturing. Propagation from the root all the way up to the target. A third argument in the method .addEventListener() can be set with the value of "true" to listen for capturing events.
    -Targeting. Registers the event on the target element.
    -Bubbling. Propagation from the target all the way up to the root. The method stopPropagation() can be used to manually stop the propagation.

    EVENT DELEGATION
    Approach that manages the event on the parent element rather than the location where the event was initially triggered.
*/

const h3 = document.querySelector("h3");

//EVENT
const logEnteringElement = function (e) {
  console.log("I entered the h1 element!");
  h3.removeEventListener("mouseenter", logEnteringElement);
};

h3.addEventListener("mouseenter", logEnteringElement);

//EVENT BUBBLING
function clickMe(target) {
  console.log(`${target} is clicked`);
}

document.getElementById("div_bubbling").addEventListener(
  "click",
  () => {
    clickMe("div");
  } /* ,
  true */
);

document.getElementById("p_bubbling").addEventListener(
  "click",
  () => {
    clickMe("paragraph");
  } /* ,
  true */
);
document.getElementById("span_bubbling").addEventListener(
  "click",
  () => {
    clickMe("span");
  } /* ,
  true */
);
document.getElementById("btn_bubbling").addEventListener(
  "click",
  (e) => {
    // e.stopPropagation(); //Prevents bubbling
    clickMe("button");
  } /* ,
  true */
);

//EVENT CAPTURING
//Set a third argument with the value of "true" in each "addEventListener()" method in the Event Bubbling section above.

//EVENT DELEGATION
document.getElementById("div_delegation").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log(e.target.innerText);
  }
});
