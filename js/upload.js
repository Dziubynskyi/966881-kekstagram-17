'use strict';
var editImageForm = document.querySelector('.img-upload__overlay');
var popupOpen = document.querySelector('#upload-file');
var popupClose = document.querySelector('#upload-cancel');

popupOpen.addEventListener('change', function() {
editImageForm.classList.remove('hidden');
});

popupClose.addEventListener('click', function() {
editImageForm.classList.add('hidden');
popupOpen.value=null;
});
