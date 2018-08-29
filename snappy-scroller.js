let topArray =  [];
let pageNumber = 1;
const indicator = document.querySelector('#indicator');

const container = document.querySelector('.wrapper');
for(let i=0; i<4 ;++i)
{
  topArray.push(container.children[i]);
  let newElement = document.createElement('span')
  newElement.innerHTML =  topArray[i].getAttribute('id');
  indicator.appendChild(newElement);
}
document.querySelector('#btn').addEventListener('click',()=>{
  if(pageNumber >= 4)
    {
      pageNumber = 0
    }
  topArray[pageNumber].scrollIntoView({ 
  behavior: 'smooth' 
});
  pageNumber++
})

window.addEventListener('scroll',()=>{
  console.log(window.top)
})