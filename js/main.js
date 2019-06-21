'use strict';

var myLength = 25; // max lenght of object array

var USERS_DATA = []; // my object

var USER_COMMENTS = [
'Всё отлично',
'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

//function GenerateRundomIndex(array) {
//if (array.length!=0){
// var rundomIndex = Math.floor(Math.random() * array.length);  // Math.floor(Math.random() * 10); // returns a random integer from 0 to 9
//return rundomIndex;
//}
//else{
// console.log('Recieved array length is 0.'); // better create exception . I am printing this just for example
//}
//}

function generateIndexFromTo(from,to) {
  return Math.floor((Math.random() * to) + from);
}

function DataConstructor (url,like,comment) {
    this.url = url;
    this.like = like;
    this.comment = comment;
}

function generateUsersData (){
for (var i = 0; i < myLength; i ++) {
    USERS_DATA.push(new DataConstructor('photos/' + (i + 1) + '.jpg', //generate url
                                    generateIndexFromTo(15,200), //generate like
                                    generateIndexFromTo(1,6))); //generate comment
}
}

var similarListElement = document.querySelector('.pictures.container'); // лист картинок которые я буду в бравсыать за раз

var pictureTemplate = document.querySelector('#picture') // Найдём шаблон, который мы будем копировать. //а иначе было бы просто var similarWizardTemplate = document.querySelector('.setup-similar-item');
    .content
    .querySelector('.picture'); // И найдём элемент, в который мы будем вставлять похожих магов.


var renderPicture = function (user) {
  var pictureElement = pictureTemplate.cloneNode(true); // Отрисуем наш шаблон в документ.
  pictureElement.querySelector('.picture__img').src = user.url;
  pictureElement.querySelector('.picture__likes').textContent = user.like;
  pictureElement.querySelector('.picture__comments').textContent = user.comment;
  return pictureElement;
}


var fragment = document.createDocumentFragment(); // cохраняю  эти картинки, лайки, комменты в обьект fragment
generateUsersData(); //Create users object

for (var i = 0; i < USERS_DATA.length; i++) {
  fragment.appendChild(renderPicture(USERS_DATA[i]));//cоздаю эти картинки, лайки, комменты
}
similarListElement.appendChild(fragment); // вбрасываю разом все //cоздаю эти картинки, лайки, комменты
