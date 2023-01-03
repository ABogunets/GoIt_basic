const inputRef = document.querySelector('input');

let inputOnEvent = 0;
console.log("inputOnEvent", inputOnEvent);

inputRef.addEventListener('input', onTextInput);

function onTextInput(event) {
  inputOnEvent = event.target.value;
  console.log("event.target.value", event.target.value);//current 
}

console.log("inputOnEvent", inputOnEvent); //still "0"

