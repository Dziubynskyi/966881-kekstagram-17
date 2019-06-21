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

chromeEffect.addEventListener('click', function() {
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
