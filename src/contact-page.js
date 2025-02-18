export function contactPageLoad(){
  let contentDiv = document.querySelector('#content');

  const contactH1Ele = document.createElement('h1');
  contactH1Ele.textContent ="Contact me";

  const contactPEle1 = document.createElement('p');
  contactPEle1.textContent =`email:random@notreal.com`

  const contactPEle2=document.createElement('p');
  contactPEle2.textContent=` phone:555555555`

  const contactPEle3=document.createElement('p');
  contactPEle3.textContent=`address:earth blvd`

  contactH1Ele.classList.add('center');
  
  contentDiv.append(contactH1Ele,contactPEle1,contactPEle2,contactPEle3);
  for(let i =0;i<contentDiv.children.length;i++){
    const child=contentDiv.children[i];
    /* loop through all children of content div and add class center
      
    */
      child.classList.add('center');

      
  }
}