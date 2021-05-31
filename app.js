var about = document.getElementById("nav-aboutus");
var quizz = document.getElementById("nav-quizz");
var corona = document.getElementById("nav-corona");
var solutions = document.getElementById("nav-solutions");
var withoutMask = document.getElementById("withoutmask");
var wearMask = document.getElementById("button1");
var Nsd = document.getElementById("Nsd");
var sd = document.getElementById("button2");
var outside = document.getElementById("outside");
var inside = document.getElementById("button3")
var again = document.getElementById("PlayAgain");

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

wearMask.onclick=()=>{
    withoutMask.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGKpoInNii-ILxouB4_3X1qMdNKN2xIKwgNQ&usqp=CAU";
}

sd.onclick=()=>{
    Nsd.src="https://static.vecteezy.com/system/resources/previews/000/963/012/non_2x/cartoon-female-and-male-social-distancing-vector.jpg";
}

inside.onclick=()=>{
    outside.src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5823655.jpg";
}
again.onclick=()=>{
location.href="./quizz.html";
}
