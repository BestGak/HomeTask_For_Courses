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



