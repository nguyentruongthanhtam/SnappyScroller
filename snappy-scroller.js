let topArray =  [];
let pageNumber = 1;
const indicator = document.querySelector('#indicator');
const container = document.querySelector('.wrapper');

for(let i=0; i<4 ;++i)
{
  topArray.push(container.children[i]);
  let newElement = document.createElement('span')
  newElement.addEventListener('click', () => {
    topArray[i].scrollIntoView({ 
      behavior: 'smooth' 
    })
  })
  newElement.innerHTML =  topArray[i].getAttribute('id');
  indicator.appendChild(newElement);
}
indicator.children[0].classList.add('indicator_isActive');
document.querySelector('#btn').addEventListener('click',()=>{
  if(pageNumber >= 4)
    {
      pageNumber = 0
      indicator.children[3].classList.remove('indicator_isActive');
    }
  else
    {
      indicator.children[pageNumber-1].classList.remove('indicator_isActive');
    }
  topArray[pageNumber].scrollIntoView({ 
    behavior: 'smooth' 
  })
  indicator.children[pageNumber].classList.add('indicator_isActive');
  pageNumber++
})

