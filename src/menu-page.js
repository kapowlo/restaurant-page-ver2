import imageOne from './image-1.jpg';
import imageTwo from './image-2.jpg';
import imageThree from './image-3.jpg';


export function menuPageLoad(){
  let contentDiv = document.querySelector('#content');


  const imageElementOne = document.createElement('img');
  const menuh3ele1 = document.createElement('h3')
  menuh3ele1.textContent='Delicious pizza! '
  imageElementOne.src = imageOne;

  const imageElementTwo = document.createElement('img');
  const menuh3ele2 = document.createElement('h3')
  menuh3ele2.textContent='lots of really tasty strawberries! '
  imageElementTwo.src = imageTwo

  const imageElementThree = document.createElement('img');
  const menuh3ele3 = document.createElement('h3')
  menuh3ele3.textContent='A beautiful chocolate cake with a straberry on top,yummy!'
  imageElementThree.src = imageThree;

  contentDiv.append(imageElementOne,menuh3ele1,imageElementTwo,menuh3ele2,imageElementThree,menuh3ele3);

  for(let i =0;i<contentDiv.children.length;i++){
      const child = contentDiv.children[i];
      if(child.tagName ==='H3'){
        child.classList.add('center')
      }
  }
}

