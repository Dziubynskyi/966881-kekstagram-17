'use strict';
var ESC_KEYCODE = 27;
var editImageForm = document.querySelector('.img-upload__overlay');
var popupOpen = document.querySelector('#upload-file');
var popupClose = document.querySelector('#upload-cancel');
var textDescription = document.querySelector('.text__description');

textDescription.addEventListener('keyup', function(evt) {
if (evt.target===textDescription){
document.removeEventListener('keydown', onPopupEscPress);
}
else {
  textDescription.removeEventListener('keyup');
}
});

popupOpen.addEventListener('change', function() {
editImageForm.classList.remove('hidden');
});

popupClose.addEventListener('click', function() {
 closePopup();
});

popupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }});

function onPopupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }};

function closePopup() {
  editImageForm.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  popupOpen.value=null;
};


