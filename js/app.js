'use strict';

var allPictures=[];
var clicksValue = [];
var pictureNames=[];
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
  var searching = true;

  while (searching){
    var randomPicture = Math.floor(Math.random()* allPictures.length);
    pic = allPictures[randomPicture];
    var exists = false;

    for (var i = 0; i < attachedPictures.length; i++) {
      if (pic.id === attachedPictures[i].id) {
        exists = true;
        break;
      }
    }

    for (var j = 0; j < oldAttachedPictures.length; j++) {
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
      attachedPictures[i].totalClicks+=1;

      break;
    }
  }

  if (allClicks <= 25) {
    nextPage();
  } else {
    detachClick(pictureOne);
    detachClick(pictureTwo);
    detachClick(pictureThree);


  }

}
function addToArray(){
  for (var i = 0; i < allPictures.length;i++){
    clicksValue[i] = allPictures[i].totalClicks;
    pictureNames[i]= allPictures[i].name;
  }
}
function detachClick(picElement) {
  picElement.removeEventListener('click', click);
  hideBox();
  drawChart();

}
function hideBox(){
  document.getElementById('box').style.display='none';
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
  addToArray();
}

nextPage();

var data = {
  labels: pictureNames,
  datasets: [{
    data: clicksValue,
    backgroundColor: [
      'bisque',
      'goldenRod',
      'burlywood',
      'lightblue',
      'navy',
      'bisque',
      'darkgray',
      'green',
      'lightblue',
      'coral',
      'DarkKhaki',
      'Aquamarine',
      'burlywood',
      'lightblue',
      'brown',
      'bisque',
      'darkgray',
      'DarkGoldenRod',
      'lime',
      'navy'
    ],
    hoverBackgroundColor: [
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple',
      'purple'
    ]
  }]
};

var Chart;
function drawChart() {
  var ctx = document.getElementById('bus-chart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      animation: {
        duration: 2000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });

}

