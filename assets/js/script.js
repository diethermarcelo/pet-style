// Navigations

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


// Work in progress
let work_in_progress_items      = document.querySelectorAll('.work-in-progress');
let work_in_progress_root       = document.querySelector('#work-in-progress-root');
let work_in_progress_close      = document.querySelector('.work-in-progress-modal button');
let work_in_progress_bg         = document.querySelector('.work-in-progress-container .background');
for(let work_in_progress_item of work_in_progress_items){
    work_in_progress_item.addEventListener('click', () => {
        work_in_progress_root.classList.remove('none')
    })
} 

work_in_progress_bg.addEventListener('click', () => {
    work_in_progress_close.click()
})
work_in_progress_close.addEventListener('click', () => {
    
    work_in_progress_root.classList.remove('none')
    work_in_progress_root.classList.add('none')
})

// Dynamic year

let year            = document.querySelector('footer .year');
let currentYear     = new Date().getFullYear()
year.innerHTML      = currentYear
