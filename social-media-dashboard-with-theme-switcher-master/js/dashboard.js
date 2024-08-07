const toggle = document.getElementById('toggle');
const themeSwitcher = document.querySelectorAll('.followers-box');;


toggle.addEventListener('change', function(){
    document.body.classList.toggle('dark-theme');
})
