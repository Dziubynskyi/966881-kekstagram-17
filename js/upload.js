'use strict';
var ESC_KEYCODE = 27;
var editImageForm = document.querySelector('.img-upload__overlay');
var popupOpen = document.querySelector('#upload-file');
var popupClose = document.querySelector('#upload-cancel');
var textDescription = document.querySelector('.text__description');

popupOpen.addEventListener('change', function() {
  //а вот тут-то мы и должны навешивать наш обработчик onPopupEscapePress
  document.addEventListener("keydown", onPopupEscPress)
  editImageForm.classList.remove('hidden');
});

popupClose.addEventListener('click', function() {
  closePopup();
});

function onPopupEscPress(evt) {
  //вот именно здесь мы проверяем, на каком элементе изначально случилось событие
  if (evt.keyCode === ESC_KEYCODE && evt.target !== textDescription) {
    closePopup();
  }
};

function closePopup() {
  editImageForm.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  popupOpen.value = null;
};
