let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrasrt");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");

let download = document.getElementById("download");
let upload = document.getElementById("upload");
let img = document.getElementById("img");

let rest = document.querySelector("span");
let imgbox = document.querySelector(".img-box");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

function restvalue(){
    img.style.filter = "none";
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';

}

window.onload = function(){
    download.style.display = 'none';
    rest.style.display = 'none';
    imgbox.style.display = 'none';
}
upload.onchange = function (){
    restvalue();
    download.style.display = 'block';
    rest.style.display = 'block';
    imgbox.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){   
        img.src = file.result;
    }
    img.onload = function (){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        img.style.display = 'none'; 
    }
}

let filters = document.querySelectorAll("ul li input");
filters.forEach( filter => {
    filter.addEventListener('input' , function(){
        ctx.filter = 
        `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px) 
        `
        ctx.drawImage(img,0,0,canvas.width,canvas.height);

        
        // img.style.filter `brightness(${brightness.value}%)`
        // img.style.filter `sepia(${sepia.value}%)`
        // img.style.filter `grayscale(${grayscale.value})`
        // img.style.filter `blur(${blur.value}px)`
        // img.style.filter `hueRotate(${hueRotate.value}deg)`
    })
}
);

download.onclick = function (){
    download.href=canvas.toDataURL();
}