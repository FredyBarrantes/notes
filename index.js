// alert("this es a test on git")
// if (a >= b) {
//     alert("modifying this file to test something")
// }


 ls = [1, 2, 3, 4]
 ls.push(5)
 ls.forEach(element => {
     /*At this point freDev Start coding*/
     if (element > 2) {
         alert(element)
     }else if (element < 3) {
         alert(element)
     }
     sendthis(element)
 });
 // This line has been added to prove when some changes are done.
 function sendthis(arg) {
     if (arg % 2 == 0) {
         alert("The number is even")
     }else{
         alert("The number is odd")
     }
}
console.log("js")
const divTi = document.getElementById("ti")
divTi.style.display = "none"
const botonShows = document.getElementById("shows")
botonShows.addEventListener("click", fnShowTitle)

function fnShowTitle() {
    console.log("detecta pulsacion del boton")
    divTi.style.display = "flex"
}
