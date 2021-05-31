var about = document.getElementById("nav-aboutus");
var quizz = document.getElementById("nav-quizz");
var corona = document.getElementById("nav-corona");
var solutions = document.getElementById("nav-solutions");
const buttons = document.querySelectorAll('button');
about.onclick = () =>{
    location.href="./index.html";
}
quizz.onclick = () =>{
    location.href="./quizz.html";
}
corona.onclick = () =>{
    location.href="./covid.html";
}
solutions.onclick = () =>{
    location.href="./solutions.html";
}

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const para = button.nextElementSibling;
        const icon = button.children[1];

        para.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )