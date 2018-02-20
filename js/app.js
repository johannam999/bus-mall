
var allPictures=[];
function Picture(name, filePath){
  this.name = name;
  this.filePath = filePath;
  this.totalCliks = 0;
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

function getRandomPicture(picElement){

  var randomPicture = Math.floor(Math.random()* allPictures.length);

  picElement.src = allPictures[randomPicture].filePath;
  picElement.alt = allPictures[randomPicture].name;
  picElement.title = allPictures[randomPicture].name; 
  
  if (pictureOne === pictureTwo || pictureTwo === pictureThree || pictureThree === pictureOne) {
    /*getRandomPicture(pictureOne);
    getRandomPicture(pictureTwo);
    getRandomPicture(pictureThree);*/
}

getRandomPicture(pictureOne);
getRandomPicture(pictureTwo);
getRandomPicture(pictureThree);

var clickBox = document.getElementById('box');
clickBox.addEventListener('click', clickThePic);

function clickThePic(event){
  getRandomPicture(pictureOne);
  getRandomPicture(pictureTwo);
  getRandomPicture(pictureThree); 

}

  

}
/*function changeImage(){
  if allPicture.name{
    //reload the page and put new images
    event.target.reset(); 
    newPicture();

  

  
  }
}*/