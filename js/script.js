const myHeading = document.querySelector("h1");


myHeading.textContent = "Hello, World!";

let myFirstArray = [15, 'Bermet', true, false, 12.5]

function multiply(num1, num2){
    let res = num1 * num2;
    return res;
}

function sayHello(){
    alert("Hello my reader!");
    console.log("It is console.log");
    console.error("It is error message");

}

myHeading.addEventListener('click', sayHello)

const imgElement = document.querySelector("img");

const img1URL = "img/Foto.png";
const img2URL = "img/car1.jpeg";

function changePhoto(event){
    let current = imgElement.getAttribute("src");
    if(current == img1URL){
        imgElement.setAttribute("src",img2URL);
    } else {
        imgElement.setAttribute("src", img1URL)
    }
}

imgElement.onclick = changePhoto;

