//todo----------------------------------------------------------------------------------

// 1 - отримай body елемент і виведи його в консоль;
const body = document.querySelector('body');
console.log(body);

//todo----------------------------------------------------------------------------------

// 2 - отримай елемент id = "title" і виведи його в консоль;
const title = document.querySelector('#title');
console.log(title);

//todo----------------------------------------------------------------------------------

// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector('.list');
console.log(list);

//todo----------------------------------------------------------------------------------

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const topics = document.querySelectorAll('[data-topic]');
console.log(topics);

//todo----------------------------------------------------------------------------------

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const fistTopic = document.querySelector('[data-topic]');
console.log(fistTopic);

//todo----------------------------------------------------------------------------------

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastTopic = document.querySelector('[data-topic]:last-child');
console.log(lastTopic);

//todo----------------------------------------------------------------------------------

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const h1 = document.querySelector('h1');
console.log(h1.nextElementSibling);

//todo----------------------------------------------------------------------------------

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const h3elements = document.querySelectorAll('h3');
console.log(h3elements);

//todo----------------------------------------------------------------------------------

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
h3elements.forEach(h3 => {
  h3.classList.add('active');
});

//todo----------------------------------------------------------------------------------

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navigation = document.querySelector('[data-topic="navigation"]');
console.log(navigation);

//todo----------------------------------------------------------------------------------

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
//const navStyle = document.querySelector('[data-topic="navigation"]');
navigation.style.backgroundColor = 'yellow';

//todo----------------------------------------------------------------------------------

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
//const navText = document.querySelector('[data-topic="navigation"]');
navigation.lastElementChild.textContent = 'Я змінив тут текст!';

//todo----------------------------------------------------------------------------------

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = 'manipulation';
const currentTopicElement = document.querySelector(
  `[data-topic="${currentTopic}"]`
);

//todo----------------------------------------------------------------------------------

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
currentTopicElement.style.backgroundColor = 'blue';

//todo----------------------------------------------------------------------------------

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completed = document.querySelector('.completed');
console.log(completed);

//todo----------------------------------------------------------------------------------

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const removeCompleted = completed.closest('li');
removeCompleted.remove();

//todo----------------------------------------------------------------------------------

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний
// текст: "Об'єктна модель документа (Document Object Model)"
const pText = document.createElement('p');
pText.textContent = "Об'єктна модель документа (Document Object Model)";
title.after(pText);

//todo----------------------------------------------------------------------------------

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const li = document.createElement('li');
const pEl = document.createElement('p');
const h3El = document.createElement('h3');
list.appendChild(li);
li.appendChild(h3El);
li.appendChild(pEl);
h3El.textContent = 'Властивість innerHTML';
pEl.textContent =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';

//todo----------------------------------------------------------------------------------

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const markup = `
  <li>
    <h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
  </li>
`;
list.insertAdjacentHTML('beforeend', markup);

//todo----------------------------------------------------------------------------------

// 20 - очисти список
list.innerHTML = '';

//todo----------------------------------------------------------------------------------
