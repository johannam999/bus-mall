'use strict'
;var allPictures=[];

function Picture(name, filePath){
  this.name = name;
  this.id = name.replace(' ','-');
  this.filePath = filePath;
  this.totalClicks = 0;
  this.totalViews = 0;
  allPictures.push(this);
}



new Picture('bag', 'img/bag.jpg');
new Picture('banana','img/banana.jpg');
new Picture('bathroom','img/bathroom.jpg');
new Picture('boots','img/boots.jpg');
new Picture('breakfast','img/breakfast.jpg');
new Picture('bubblegum','img/bubblegum.jpg');
new Picture('chair','img/chair.jpg');
new Picture('cthulhu','img/cthulhu.jpg');
new Picture('dog duck','img/dog-duck.jpg');
new Picture('dragon','img/dragon.jpg');
new Picture('pen','img/pen.jpg');
new Picture('pet sweep','img/pet-sweep.jpg');
new Picture('scissors','img/scissors.jpg');
new Picture('shark','img/shark.jpg');
new Picture('sweep','img/sweep.png');
new Picture('tauntaun','img/tauntaun.jpg');
new Picture('unicorn','img/unicorn.jpg');
new Picture('usb','img/usb.gif');
new Picture('water can','img/water-can.jpg');
new Picture('wine glass','img/wine-glass.jpg');



var pictureOne = document.getElementById('one');
var pictureTwo = document.getElementById('two');
var pictureThree = document.getElementById('three');

var oldAttachedPictures = [];
var attachedPictures = [];

function getRandomPicture() {
  var pic;

  while (true){
    var randomPicture = Math.floor(Math.random()* allPictures.length);
    pic = allPictures[randomPicture];
    var exists = false;

    for (var i = 0; i < attachedPictures.length; i++) {
      if (pic.id === attachedPictures[i].id) {
        exists = true;
        break;
      }
    }

    for (var i = 0; i < oldAttachedPictures.length; i++) {
      if (pic.id === oldAttachedPictures[i].id) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      break;
    }
  }

  return pic;
}

function attach(picture, picElement) {
  picElement.src = picture.filePath;
  picture.totalViews++;
  picElement.alt = picture.name;
  picElement.title = picture.name;
  picture.picelementid = picElement.id;
  attachedPictures.push(picture);
}

function click() {
  var picElement = this;
  for (var i = 0; i < attachedPictures.length; i++) {
    if (picElement.id === attachedPictures[i].picelementid) {
      attachedPictures[i].totalClicks++;
      break;
    }
  }

  if (allClicks < 25) {
    nextPage();
  } else {
    detachClick(pictureOne);
    detachClick(pictureTwo);
    detachClick(pictureThree);
  }
}

function detachClick(picElement) {
  picElement.removeEventListener('click', click);
}

function attachClick(picElement) {
  picElement.addEventListener('click', click);
}

attachClick(pictureOne);
attachClick(pictureTwo);
attachClick(pictureThree);

var allClicks = 0;

function nextPage() {
  oldAttachedPictures = attachedPictures;
  attachedPictures = [];

  var pictureObject1 = getRandomPicture();
  attach(pictureObject1, pictureOne);
  var pictureObject2 = getRandomPicture();
  attach(pictureObject2, pictureTwo);
  var pictureObject3 = getRandomPicture();
  attach(pictureObject3, pictureThree);

  allClicks++;
}

nextPage();
