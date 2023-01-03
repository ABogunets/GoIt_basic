// ! Task from Lecture
// Створити калькурялтор вартості продукту взалежності від ціни.
// При роботі з подіями використовувати делагування.Відрендерити всю розмітку через JS

// При змінні данних в інпуті №1 чи №2 автоматично має перераовуватися загальна вартість

// Завжди має відображатися валюта - гривня

// Загальна сума відображається з копійками (2 знаки після коми)

// В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав
//  користувач на другому інпуті.

// Кольрова підказка має змінювати своє значення при перетягувані повзунка.

// В інпуті №2 мін і мах поріг встановлюєте самостійно.

// При завантаженні сторінки скрип має автоматично розрахувати вартість на основі
//  данних за замовчуванням які ви встановите в розмітці.

const data = {
  quantity: 0,
  price: 0,
  calcTotalPrice() {
    return (this.quantity * this.price).toFixed(2);
  }
}

// dom links
const mainForm = document.getElementById('form');
const priceInput = document.getElementById('price');
const quantityInput = document.getElementById('quantity');
const amount = document.getElementById('amount');
const total = document.getElementById('total');

// data filling
datafill();
displayTotal();

// events
mainForm.addEventListener('change', handleFormChange);

// functions
function handleFormChange({target}) {
  const { value } = target;

  if (target === priceInput) {
    if (!Number(value)) { console.log('Не число!'); return}
  }
  else if (target === quantityInput) {
    amount.textContent = value;
  }
  target.setAttribute('value', value);
  datafill();
  displayTotal();

  console.log(data);
}

function datafill() {
data.price = priceInput.getAttribute('value');
data.quantity = quantityInput.getAttribute('value');
}
function displayTotal() {
total.textContent = data.calcTotalPrice() + ' грн';
}

