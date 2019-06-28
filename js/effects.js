'use strict';
var imagePreview = document.querySelector('.img-upload__preview');

var chromeEffect = document.querySelector('.effects__preview.effects__preview--chrome');
var sepiaEffect = document.querySelector('.effects__preview.effects__preview--sepia');
var marvinEffect = document.querySelector('.effects__preview.effects__preview--marvin');
var phobosEffect = document.querySelector('.effects__preview.effects__preview--phobos');
var heatEffect = document.querySelector('.effects__preview.effects__preview--heat');


var chrome = 1;
var sepia = 1;
var marvin = 100;
var phobos = 3;
var heat = 3;
/*chromeEffect.addEventListener('click', function() {
imagePreview.classList.add('effects__preview--chrome');
imagePreview.style.fill = "grayscale("+chrome+")";
});

sepiaEffect.addEventListener('click', function() {
imagePreview.classList.add('effects__preview--sepia');
imagePreview.style.fill = "sepia("+sepia+")";
});

marvinEffect.addEventListener('click', function() {
imagePreview.classList.add('effects__preview--marvin');
imagePreview.style.fill = "invert("+marvin+"%)";
});

phobosEffect.addEventListener('click', function() {
imagePreview.classList.add('effects__preview--phobos');
imagePreview.style.fill = "blur("+phobos+"px)";
});

heatEffect.addEventListener('click', function() {
imagePreview.classList.add('effects__preview--heat');
imagePreview.style.fill = "brightness("+heat+")";
});
*/
(function () {

  //var effectLevel = document.querySelector('.effect-level__pin');
  var setupDialogElement = document.querySelector('.effect-level__pin'); //что тащим
  var dialogHandler = document.querySelector('.effect-level__pin'); // за какой элемент что тащим

  dialogHandler.addEventListener('mousedown', function (evt) { //Сначала найдём тот элемент, и обработаем событие начала перетаскивания нашего "ползунка" mousedown.
    evt.preventDefault(); // этот метод отменяет обычную реакцию браузера на событие. Например, переход по ссылке при клике на ссылку

    var startCoords = { // стартовые координаты (Запомним координаты точки, с которой мы начали перемещать диалог.)
      x: evt.clientX, // координаты по x
      //y: evt.clientY // координаты по y
    };

    var dragged = false; // "тащили" = false

    var onMouseMove = function (moveEvt) { // // функция обработчик onMouseMove
      moveEvt.preventDefault();
      dragged = true; // "тащили" = true - мы в режеме перетаскивания

      var shift = { // cмена координат
        x: startCoords.x - moveEvt.clientX, // стартовые координаты - новые координаты cмещения
        //y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX, // переписываем стартовые координаты
        //y: moveEvt.clientY
      };

      //setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px'; // в этой строке вычисляется новое положение элемента при перетаскивании. координаты относительно левого края - на сколько переместился (потом новое положение записывается в стили элемента)

    };

    var onMouseUp = function (upEvt) { // функция обработчик onMouseUp (отцепить мышку от слайдера)
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove); //удалим обработчики события передвижения мыши
      document.removeEventListener('mouseup', onMouseUp); // удалим обработчики события отпускания кнопки мыши

      if (dragged) { // если у нас было перетаскивание
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault) // отменяем поведение клика по слайдеру
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove); //Добавим обработчики события передвижения мыши
    document.addEventListener('mouseup', onMouseUp); // Добавим обработчики события отпускания кнопки мыши
  });
})();
