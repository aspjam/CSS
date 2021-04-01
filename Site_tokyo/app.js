/**
 * Afficher le menu apres un click sur l'icone hamburger
 */

let logo=document.querySelector('.logo-menu');
let menu=document.querySelector('.list-nav'); 

logo.addEventListener('click',function () {
    menu.classList.toggle("active"); 
})
