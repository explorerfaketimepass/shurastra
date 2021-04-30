//*** General Modal Functions ***//

function modalOpen(sModalQuery) {
  var eModal = document.querySelector(sModalQuery);
  if (eModal) eModal.style.display = 'block';
}

function modalClose(sModalQuery) {
  var eModal = document.querySelector(sModalQuery);
  if (eModal) eModal.style.display = 'none';
}

function modalsClose() {
    // Set event listener for manage privacy buttons
    var aModals = document.querySelectorAll('.modal-container');
    for (var i = 0; i < aModals.length; i++) aModals[i].style.display = 'none';
}

// Set event listener for closing modals on click outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-container')) modalsClose();
    if (e.target.classList.contains('modal-close')) modalsClose();
    if (e.target.classList.contains('modal-close-button')) modalsClose();
});