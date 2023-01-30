let mobile_close        = document.querySelector('.close');
let mobile_nav          = document.querySelector('.mobile-nav');
let burger              = document.querySelector('.burger-icon');
let mobile_nav_items    = document.querySelectorAll('.mobile-nav .nav-items') 

mobile_close.addEventListener('click', function(){
    mobile_nav.classList.remove('none')
    mobile_nav.classList.add('none')
})

burger.addEventListener('click', function() {
    mobile_nav.classList.remove('none')
})


for(let mobile_nav_item of mobile_nav_items) {
    mobile_nav_item.addEventListener('click', () => {
        mobile_nav.classList.remove('none')
        mobile_nav.classList.add('none')
    })
}