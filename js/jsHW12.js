let menuBtn = document.querySelector('.menu-btn');
let firstSpan = document.querySelector('#first__span');
let textFight = document.querySelector('.animation__text');



menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
  firstSpan.classList.toggle('none');
  textFight.classList.toggle('opacity')
})