/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel(){
  const
  carousel=document.createElement('div'),
  leftButton=document.createElement('div'),
  imgMountains=document.createElement('img'),
  imgComputer=document.createElement('img'),
  imgTrees=document.createElement('img'),
  imgTurntables=document.createElement('img'),
  rightButton=document.createElement('div');

  carousel.appendChild(leftButton);
  carousel.appendChild(imgMountains);
  carousel.appendChild(imgComputer);
  carousel.appendChild(imgTrees);
  carousel.appendChild(imgTurntables);
  carousel.appendChild(rightButton);

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  leftButton.textContent=' < ';
  rightButton.textContent=' > ';
  imgMountains.src='./assets/carousel/mountains.jpeg';
  imgComputer.src='./assets/carousel/computer.jpeg';
  imgTrees.src='./assets/carousel/trees.jpeg';
  imgTurntables.src='./assets/carousel/turntable.jpeg';

  let imageCount=0;
  //0: mountains
  imgMountains.style.display='flex';
  //1: computer
  imgComputer.style.display='none';
  //2: trees
  imgTrees.style.display='none';
  //3: turntable
  imgTurntables.style.display='none';

  function buttonClick(buttonEvent){ // Determines what to display when buttons are clicked.
    imageCount=imageCount+buttonEvent;
    //Loops back
    if(imageCount<=-1){
      imageCount=3;
    }
    if(imageCount>=4){
      imageCount=0;
    }
    //Clean Slate
    imgMountains.style.display='none';
    imgComputer.style.display='none';
    imgTrees.style.display='none';
    imgTurntables.style.display='none';
    //Determines what to display based on value of imageCount
    if(imageCount===0){
      imgMountains.style.display='flex';
    }
    if(imageCount===1){
      imgComputer.style.display='flex';
    }
    if(imageCount===2){
      imgTrees.style.display='flex';
    }
    if(imageCount===3){
      imgTurntables.style.display='flex';
    }
  }

  //Added Function to buttons
  leftButton.addEventListener('click', function(){
    buttonClick(-1);
  })
  rightButton.addEventListener('click', function(){
    buttonClick(1);
  })
  return carousel;
}
console.log(createCarousel());
const carouselContainer=document.querySelector('.carousel-container');
carouselContainer.appendChild(createCarousel());