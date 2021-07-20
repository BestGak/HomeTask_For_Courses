let input = document.querySelector('#input');
let btn = document.querySelector('#btn');
let paragraph = document.querySelector('#paragraph');
let paragraph1 = document.querySelector('#paragraph1');
let a = getRandomInt(100);

btn.addEventListener('click', function(){
  
  if (input.value == a){
    a = getRandomInt(100);
    paragraph.innerHTML = 'Вы угадали'
    paragraph1.innerHTML= 'Have a nice day :3';
  } else if (input.value > a){
    paragraph.innerHTML = 'Введите число поменьше'
    paragraph1.innerHTML = ' ';
  } else if (input.value < a){
    paragraph.innerHTML = 'Введите число побольше'
  } else{
    paragraph.innerHTML = 'Вы ввели не число'
    paragraph1.innerHTML = ' ';
  }
})

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


const cells = document.querySelectorAll('td') // Получаем каждую ячейку таблицы в элемент NodeList - массивоподобный элемент
const table = document.querySelector('table') // Получаем родительский элемент - Таблицу
const arr = [...cells] // Преобразуем cells в массив
const nums = arr.sort(() => Math.random() - Math.random()).slice(0, 10) // Перемешиваем массив и получаем первые 10 элементов в случайных ячейках
let array = [] // Инициализируем пустой массив, куда будут попадать правильные клики по ячейкам
let btnGame = document.querySelector('#btn_game')
let gameText = document.querySelector('#gameText');


function cellFinder() {   
  cells.forEach((cell) => {      // Запускаем прослушку на каждую ячейку методом forEach
    cell.addEventListener('click', (i) => {  // Прослушка по собыитию Click  
      const elemIndex = arr.indexOf(cell, 0)  // Создаем переменную которая будет показывать нам индекс нажатой ячейки начиная с 0 индекса
      cell.style.backgroundColor = 'red' // красим ячейки которые не загаданы в красный цвет       
      for (let i in nums) { // запускаем цикл for in для индексов массива nums
        if (i == elemIndex) { // условие если индекс массива (i) равен индексу нажатой ячейки elemIndex
          cell.style.backgroundColor = 'green' // закрашиваем эту ячейку в зеленый цвет
          array.push(i) // и сразу же добавляем индекс нашей ячейки в массив array
          array = [...new Set(array)] // после добавдения элемнта сразу делаем проверку на повторное добавление, чтобы избежать добавления в массив одной и той же ячейки несколько раз
          console.log(array) // временное необязательное действие вывода массива array в консоль
        }   
        if (array.length == 10) { // условие проверки массива array -  когда длина массива будет равна 10
          startGame();                   
          table.classList.add('table__nc') // добавляем класс к таблице блокирующий дальнейшее продолжение игры
          gameText.innerHTML = 'Поздравляю, вы победили!'
          // return table.insertAdjacentHTML('afterend', 'Поздравляю, вы победили!') // вывести в таблице надпись о победе
        }         
      }            
      console.log(elemIndex)  // временное необязательное действие вывода индекса текущей нажатой ячейки в консоль     
    })    
  })    
}

cellFinder();

function startGame(){
btnGame.addEventListener('click', function(){ 
  cells.forEach(cell => {
    cell.style.background = 'transparent'
  });
  gameText.innerHTML = ' '
  table.classList.remove('table__nc');
  array = [];
  console.log('clicked');
})
}

let btnForm = document.querySelector('button');
let formText = document.querySelector('#name');

btnForm.addEventListener('click' , function(){
console.log(formText.value);
})