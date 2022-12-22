// ! from Repeta
//* cration of 1 el
// const navItemEl = document.createElement('li');
// navItemEl.classList.add('site-nav__item');
// console.log("navItemEl", navItemEl);

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('site-nav__link');
// navLinkEl.textContent = 'My cabinet';
// navLinkEl.href = '/profile';
// // console.log("navLinkEl", navLinkEl);

// const navLink2El = document.createElement('a');
// navLink2El.classList.add('site-nav__link');
// navLink2El.textContent = 'My cabinet';
// navLink2El.href = '/profile';


// navItemEl.appendChild(navLinkEl);

// const navEl = document.querySelector('.site-nav');
// console.log("navEl", navEl);

// // navEl.appendChild(navItemEl);
// // navEl.insertBefore(navItemEl, navEl.firstElementChild);
// navEl.append(navLinkEl, navLink2El);

//* cration of collection
// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
// * single element
// const option = colorPickerOptions[0];

// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;
// buttonEl.style.width = '40px';

// // console.log("option", option);
// console.log("buttonEl", buttonEl);

// colorPickerOptions.forEach(option => console.log(option));
// const colorPickerContainerEl = document.querySelector('.js-color-picker');
// console.log("colorPickerContainerEl", colorPickerContainerEl);

// * via for
// const elements = [];
// colorPickerOptions.forEach(option => {
//   const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   buttonEl.classList.add('color-picker__option');
//   elements.push(buttonEl);
// });
// console.log(elements);
// colorPickerContainerEl.append(...elements);
//* via Map
// const elements = colorPickerOptions.map(option => {
//   const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   buttonEl.style.width = '64px';
//   return buttonEl

// })
// console.log("elements", elements);
// colorPickerContainerEl.append(...elements);

//* via function
// const makeColorElements = (options) => {
//   return options.map(option => {
//   const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   buttonEl.style.width = '64px';
//   return buttonEl
// })
// }

// colorPickerContainerEl.append(...makeColorElements(colorPickerOptions));

// * via Parsers
// const titleEl = document.querySelector('.title');
// console.log(titleEl.textContent);
// console.log(titleEl.innerHTML);
// // titleEl.innerHTML = '<a href=""> This is ref </a>';
// console.log(titleEl.innerHTML);

// titleEl.insertAdjacentHTML('afterbegin','<a href=""> This is ref </a>');

// ! from Lecture-1
//TODO task-1
//1. Створити список технологій що вивчаються на курсі Fullstack за допомогою js
// Показати як че робиться через **map** та **reduce**

// const container = document.getElementById("container");
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// *via map and create
// const listEl = document.createElement('ul');
// const makelistItemsEl = (technologies) => {
//   return technologies.map(technology => {
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = technology;
//     return listItemEl
//   })
// };
// listEl.append(...makelistItemsEl(technologies));
// container.append(listEl);

// *via map parser
// const listEl = document.createElement('ul');
// const listItemsEl = technologies
//   .map(technology => `<li>${technology}</li>`)
//   .join('');
// console.log("listItemsEl", listItemsEl);

// listEl.insertAdjacentHTML('afterbegin', listItemsEl);
// container.append(listEl);

// *via reduce parser var1
// const listEl = document.createElement('ul');
// const listItemsEl = technologies
//   .reduce((text, technology) => text + `<li>${technology}</li>`, '');
// console.log("listItemsEl", listItemsEl);

// listEl.insertAdjacentHTML('afterbegin', listItemsEl);
// container.append(listEl);


// *via reduce parser var2
// const listItemsEl = technologies
//   .reduce((text, technology) => text + `<li>${technology}</li>`, '');
// const listEl = `<ul>${listItemsEl}</ul>`;
// console.log("listEl", listEl);
// container.insertAdjacentHTML('afterbegin', listItemsEl);

//TODO Task 2. Створити кілька кнопок на основі масива з обєктами використовуючи createElement

// const container = document.getElementById("container");
// const colors = [
//   {
//     label: "red",
//     color: "#FF0000",
//   },
//   {
//     label: "green",
//     color: "#00FF00",
//   },
//   {
//     label: "blue",
//     color: "#0000FF",
//   },
//   {
//     label: "yellow",
//     color: "#FFFF00",
//   },
// ];

// const makeButtons = (colors) => {
//   return colors.map(({ label, color }) => {
//     const btnEl = document.createElement('button');
//     btnEl.textContent = label;
//     btnEl.style.backgroundColor = color;
//     return btnEl
//   });
// }
// const buttonsEl = makeButtons(colors);
// console.log(buttonsEl);
// container.append(...buttonsEl);