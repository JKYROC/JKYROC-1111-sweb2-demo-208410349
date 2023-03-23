'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const modal1 = document.querySelector('.modal-1');
const modal2 = document.querySelector('.modal-2');
const modal3 = document.querySelector('.modal-3');
console.log('show-modal2', btnOpenModal);

const openModal = () => {       
        modal.classList.remove("hidden");
        overlay.classList.remove('hidden');   
}

for( let i = 0 ; i < btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click',openModal);
    if (i === 0) {
        openModal(modal1);
      } else if (i === 1) {
        openModal(modal2);
      } else if (i === 2) {
        openModal(modal3);
      }
}

const closeBtn = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    console.log("closeBtn");
}
btnCloseModal.addEventListener('click',closeBtn);

document.addEventListener('keydown', (e) => {
    if(e.key === 'ESCAPE' && !modal.classList.contains('hidden'));
    closeBtn();
})