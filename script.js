// const box = document.querySelector(".box")
// console.log(box);
// const li = document.querySelector("#li")
// console.log(li);
// const green = document.querySelector('a[href="green"]')
// console.log(green);
// const blue = document.querySelector('a[href="blue"]')

// const body = document.querySelector('body')
// console.log(body)

// const allText = document.querySelectorAll('.text')
// console.log(allText);
// // console.log(allText[1]);

// // allText.forEach(function (element,index) {
// //     console.log(element);
// // })

// console.log(green.textContent);
// green.textContent = 'white'
// blue.textContent = 'black'

// allText[1].textContent = 'VW'

// green.style.color = 'green'
// allText[0].style.color = 'violet'
// allText[0].style.fontSize = '30px'
// allText[1].style.backgroundColor = 'yellow'

// const card = document.querySelector('.card')
// const cardPhoto = document.querySelector('.card-photo')
// const cardPrice = document.querySelector('.card-price')
// const cardDesc = document.querySelector('.card-desc')
// const btn = document.querySelector('#btn')
// card.style.border = '3px solid blue'
// card.style.display = 'flex'
// card.style.flexDirection = 'column'
// card.style.alignItems = 'center'
// card.style.justifyContent = 'center'
// card.style.width = '200px'
// card.style.height = '300px'
// cardPhoto.style.width = '190px'
// cardPrice.style.fontSize = '26px'
// cardDesc.style.color = 'green'
// btn.style.backgroundColor = 'yellow'

// const siteNav = document.querySelector('.site-nav')
// siteNav.style.backgroundColor = "yellow" 

// const firstLink = document.querySelector('.site-nav a')
// firstLink.classList.add('site-nav__link') 
// console.log(firstLink);

// const href = document.querySelector('a[href="https://"]')
// href.style.fontSize = '20px'


// Зробіть всі зовнішні посилання помаранчевими, змінюючи властивість style.
const ul = document.querySelectorAll('ul a')
// ul.forEach(ul =>
// {
// ul.style.color = "orange"
// })

// Оберіть всі посилання всередині списку та додайте першому і останньому клас зі стилями

ul[0].classList.add('newClass')
ul[ul.length-1].classList.add('newClass')


// Додайте заголовок до тексту та стилізуйте його за допомогою додаткового класу.

const title = document.querySelector('h1')
title.textContent = 'Title'
title.classList.add('newClassTitle')

// Замініть клас на заголовку.
title.classList.replace('newClassTitle', 'newClassTitleYellow')

// Перевірте чи містить посилання клас list
ul.forEach(ul => {
    if (ul.classList.contains('list')) {
        console.log('class contains "list".');
      } else {
        console.log('This class doesn´t contain "list".');
      }
})


// 1 Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.

const button = document.querySelector('#button')
const txt = document.querySelector('#txt')
button.textContent = txt.textContent

// 2 Створити розмітку  з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.

const car = document.querySelector('#car')
const carImg = document.querySelector('#car-img')
carImg.src = "https://www.vehiclesuggest.com/wp-content/uploads/2024/10/Tesla-Model-3-LR-RWD.jpeg?ezimgfmt=ngcb5/notWebP"

// 3 Створити розмітку  з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.

const carLink = document.querySelector('.car-link')
carLink.href = "https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
carLink.alt = "This is a beautiful car from the Pexels website"

// 4 Створити розмітку  зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.

const list = document.querySelector('.list')
const firstItem = list.querySelector('li')
firstItem.textContent = "Tesla Model Y"
