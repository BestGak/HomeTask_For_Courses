const follow = document.querySelector('#follow');
let followSpan = document.querySelector('#follow_span');
let subscribedSpan = document.querySelector('#subscribed__span')


follow.addEventListener('click', function(){
  followSpan.classList.toggle('none');
  subscribedSpan.classList.toggle('block');
  follow.classList.toggle('background');
})