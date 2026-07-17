console.log("🚀 Welcome to SomX");
const toggle=document.getElementById("themeToggle");

toggle.onclick=()=>{

document.body.classList.toggle("dark");

}
const menu=document.querySelector(".menu-btn");

const nav=document.querySelector("nav ul");

menu.onclick=()=>{

nav.classList.toggle("active");

}