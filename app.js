const btn = document.querySelector("button");
const header1= document.querySelector("h1");
btn.addEventListener('click',() =>{
 const newColor= genRandColor();
 document.body.style.backgroundColor= newColor;
 header1.innerText= newColor;
})



// logic for generating random numbers for rgb
const genRandColor=()=>{
     const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}