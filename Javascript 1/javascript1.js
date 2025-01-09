let förnamn = document.getElementById("förnamn")
let efternamn = document.getElementById("efternamn")
let resultat = document.getElementById("resultat")



function skapaEmail(){
    resultat.innerHTML = förnamn.value + efternamn.value + "@gmail.com"
}

let red = Math.floor(Math.random() * 255)
let green = Math.floor(Math.random() * 255)
let blue = Math.floor(Math.random() * 255)

document.body.style.background = "rgb(" + red + "," + green + "," + blue + ")"
document.body.style.background = `rgb(${red}, ${green}, ${blue})`