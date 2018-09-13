// Get Modal Element
var modal = document.getElementById('simpleModal');
// Get Open Modal Button
var modalBtn = document.getElementById('modalBtn');
// Get Close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen For Open Click
modalBtn.addEventListener('click', openModal);
// Listen For Close Click
closeBtn.addEventListener('click', closeModal);
// Listen For Outside Click
window.addEventListener('click', outsideClick);

// Function To Open Modal
 function openModal() {
   modal.style.display = 'block';
 }

// Function To Close modal
function closeModal() {
  modal.style.display = 'none';
}

// Function To Close modal If Outside Click
function outsideClick(e) {
  if(e.target == modal) {
  modal.style.display = 'none';
 }
}
