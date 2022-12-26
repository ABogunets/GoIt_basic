//* example-1 from Lecture notes
// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);
// * ex-2
// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   console.log("event", event);
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
//   console.log(username.value, password.value);
//     event.preventDefault();
// });
// * ex-3

// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }
// *Ex4
// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }
// *Ex5
// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// console.log(select.options[1].text);

// select.addEventListener("change", setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }
// *Ex6
// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   console.log("event", event);
//   output.textContent = event.currentTarget.value;
//   console.dir(event.currentTarget);
// });

// *Ex from Lecture-Modal
// *with Toggle, without keyboard
// const openModalBtn = document.getElementById('openModalBtn');
// const overlay = document.getElementById('overlay');
// const closeBtn = document.getElementById('closeBtn');
// const openClass = 'open';

// openModalBtn.addEventListener('click', toggleModal);
// overlay.addEventListener('click', toggleModal);
// closeBtn.addEventListener('click', toggleModal);

// function toggleModal() {
//   console.log('Hello')
//   document.body.classList.toggle(openClass);
// }

// *close with Esc
const openModalBtn = document.getElementById('openModalBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
const openClass = 'open';

openModalBtn.addEventListener('click', handleModalOpen);
overlay.addEventListener('click', handleModalClose);
closeBtn.addEventListener('click', handleModalClose);
document.body.addEventListener('keydown', handleModalCloseOnEsc);

function handleModalCloseOnEsc({key}) {
  if (key === 'Escape') handleModalClose();
}

function handleModalOpen() {
  document.body.classList.add(openClass);
}
function handleModalClose() {
  document.body.classList.remove(openClass);
}

