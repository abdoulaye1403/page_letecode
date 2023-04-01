const annee = document.getElementById('annee');
const hambuger = document.getElementById('toogle');
const navbar = document.getElementById('navtoogle');
const items = document.getElementById('items');
const entete = document.getElementById('entete');

const date = new Date()
const year = date.getFullYear()
annee.innerHTML += year 

hambuger.addEventListener('click',()=>{
  entete.classList.toggle("active");
  navbar.classList.toggle("active");
  items.classList.toggle("active");
})

