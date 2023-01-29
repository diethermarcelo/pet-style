let mobile_close    = document.querySelector('.close');
let mobile_nav      = document.querySelector('.mobile-nav');
let burger          = document.querySelector('.burger-icon')

mobile_close.addEventListener('click', function(){
    mobile_nav.classList.remove('none')
    mobile_nav.classList.add('none')
})

burger.addEventListener('click', function() {
    mobile_nav.classList.remove('none')
})