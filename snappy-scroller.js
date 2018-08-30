let topArray =  [];
let pageNumber = 1;
const pageNumbers = topArray.length;
let positionArray = [];
const indicator = document.querySelector('#snappy-scroller-indicator');
const container = document.querySelector('.snappy-scroller-wrapper');

for(let i=0; i<container.childElementCount ;++i)
{
  topArray.push(container.children[i]);
  positionArray.push(container.children[i].offsetTop);
  let newElement = document.createElement('span')
  newElement.addEventListener('click', () => {
    topArray[i].scrollIntoView({ 
      behavior: 'smooth' 
    })
  })
  newElement.innerHTML =  topArray[i].getAttribute('id');
  indicator.appendChild(newElement);
}
// indicator.children[0].classList.add('indicator_isActive');
// document.querySelector('#btn').addEventListener('click',()=>{
//   if(pageNumber >= 4)
//     {
//       pageNumber = 0
//       indicator.children[3].classList.remove('indicator_isActive');
//     }
//   else
//     {
//       indicator.children[pageNumber-1].classList.remove('indicator_isActive');
//     }
//   topArray[pageNumber].scrollIntoView({ 
//     behavior: 'smooth' 
//   })
//   indicator.children[pageNumber].classList.add('indicator_isActive');
//   pageNumber++
// })

window.addEventListener('scroll',()=>{
  let winTop = document.documentElement.scrollTop;
  let currentPos = Math.floor(winTop / window.innerHeight);
  toggleIndicatorHighlight('indicator_isActive',currentPos)
})

toggleIndicatorHighlight= (className,currentPos)=>{
  indicator.childNodes.forEach((i)=>{
    if(i.classList)
      i.classList.remove(className)
  })
  indicator.children[currentPos].classList.add(className)
}
toggleIndicatorHighlight('indicator_isActive',0)