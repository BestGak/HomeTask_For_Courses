let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let links = document.querySelectorAll('.scroll')

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

links.forEach(link => {
  link.addEventListener('click',function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  })
});