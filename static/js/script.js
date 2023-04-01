const annee = document.getElementById('annee');
const hambuger = document.getElementById('toogle');
const navbar = document.getElementById('navtoogle');
const items = document.getElementById('items');
const entete = document.getElementById('entete');

const date = new Date()
const year = date.getFullYear()
annee.innerHTML += year 

hambuger.addEventListener('click',()=>{
  navbar.style.display='flex'
  navbar.style.position ='absolute'
  navbar.style.top='10px'
  navbar.style.right='60px'

  items.style.display ='flex'
  items.style.flexDirection ='column'

  entete.style.height = '180px'
})

hambuger.addEventListener('dblclick',()=>{
    navbar.style.display='none'
    entete.style.height = '60px'
})