/* import imageOne from './image-1.jpg';
import imageTwo from './image-2.jpg';
import imageThree from './image-3.jpg'; */

import {menuPageLoad} from './menu-page.js';
import {contactPageLoad} from './contact-page.js';

export function initialPageLoad(){
let contentDiv = document.querySelector('#content');

const navBar = document.querySelector('#navbar');


/* const imageElementOne = document.createElement('img')
imageElementOne.src = imageOne;

const imageElementTwo = document.createElement('img')
imageElementTwo.src = imageTwo

const imageElementThree = document.createElement('img')
imageElementThree.src = imageThree */

const homeBtn = document.createElement('button');
homeBtn.textContent='Home';

const menuBtn = document.createElement('button');
menuBtn.textContent='Menu';


const contactBtn = document.createElement('button');
contactBtn.textContent='Contact';

navBar.append(homeBtn,menuBtn,contactBtn);
/* contentDiv.append(imageElementOne,imageElementTwo,imageElementThree); */

/*content for the home page */
const homeDiv = document.createElement('div');
homeDiv.classList.add('home-content');
contentDiv.append(homeDiv);

const homeh1Ele = document.createElement('h1');
const homepEle1 = document.createElement('p');
const homepEle2 = document.createElement('p');

homeh1Ele.textContent='Welcome to RandomResto Where Every Meal Feels Like Home!';
homepEle1.textContent=`At RandomResto, we believe that dining is more than just a meal – it’s an experience.
From the moment you walk through our doors, you’ll be greeted with warm smiles, 
exceptional service, and a menu crafted to delight all of your senses.`;
homepEle2.textContent=`open 24h/7`
homeDiv.append(homeh1Ele,homepEle1,homepEle2);

//add an event for each button when you click on them it should open a new page(so i will need three more files:home.js,menu.js,about.js)
/*content for home page
i need to go back to initial page
*/
homeBtn.addEventListener('click',()=>{
    contentDiv.textContent=''; // must keep the welcome msg and opening/closing hours
    contentDiv.append(homeDiv);
    
})

/* content for menu page */
menuBtn.addEventListener('click',()=>{
  contentDiv.innerHTML ='';
  menuPageLoad();
})

/*content for contact page  */
contactBtn.addEventListener('click',()=>{
  contentDiv.innerHTML='';
  contactPageLoad();
})
}


