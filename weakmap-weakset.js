/*
    WEAKMAP
    It's a variant of a map where the keys are garbage-collectable (they are either objets or non-registered symbols).
    Since any entry can be garbage collected, iteration methods are not supported.

    WEAKSET
    It's a variant of a set where the values are garbage-collectable (they are either objets or non-registered symbols).
    Since any value can be garbage collected, iteration methods are not supported.

    IMPORTANT: The garbage collection process in JavaScript is non-deterministic, meaning it doesn't happen immediately or predictably when an object is no longer referenced.
*/

console.log("=============WEAKMAP=============");

const elementMetadata = new WeakMap();

function addMetadata(element, metadata) {
  elementMetadata.set(element, metadata);
}

let elementMap = document.createElement("div");
addMetadata(elementMap, { clicked: false, visible: true });
console.log("elementMetadata:", elementMetadata);

// Simulate removing the element from the DOM
elementMap.remove();
elementMap = null;

console.log("=============WEAKSET=============");

const processedElements = new WeakSet();

function markAsProcessed(element) {
  processedElements.add(element);
}

let elementSet = document.createElement("div");
markAsProcessed(elementSet);
console.log("processedElements:", processedElements);

// Simulate removing the element from the DOM
elementSet.remove();
elementSet = null;
