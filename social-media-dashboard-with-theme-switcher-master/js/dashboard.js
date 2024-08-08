const toggle = document.getElementById('toggle');

toggle.addEventListener('change', function(){
    document.body.classList.toggle('dark-theme');
    // document.body.classList.toggle("light-theme");
})
