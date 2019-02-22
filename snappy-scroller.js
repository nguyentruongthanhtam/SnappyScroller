let positionArray =  [];
// The container of the scrolling views
const container = document.querySelector('.snappy-scroller-wrapper');
// Indicator element initiation 
let indicator = document.createElement('div');
indicator.id = 'snappy-scroller-indicator';
// Add idicator to document body
document.body.appendChild(indicator);

// Loop through the child elements of the container then add their IDs into
// the section array to create an indicator section with your assigned section IDS. 
for(let i=0 ; i < container.childElementCount ; i++)
{
  positionArray.push(container.children[i]);
  // create a new a tag 
  let newElement = document.createElement('span');
  // Put element id into the a tag
  newElement.innerHTML = positionArray[i].getAttribute('id');
  // Put an anchor of the element into the a tag
  newElement.href = "#" + positionArray[i].getAttribute('id');

  newElement.addEventListener('click', () => {
    positionArray[i].scrollIntoView({ 
      behavior: 'smooth' 
    })
  })
  // add the a tag into the indicator
  indicator.appendChild(newElement);
}

// Highlight the indicator when that section is in view
function toggleIndicatorHighlight(currentPosition)
{
  // add class indicator_isActive to the element aquivalent to the section in view
  const isActive = 'isActive';
  // remove active class of the other element
  indicator.childNodes.forEach(function(child)
  {
    if(child.classList.contains(isActive))
      child.classList.remove(isActive)
  })
  // add isActive class to the current highlight
  indicator.children[currentPosition].classList.add(isActive)
}
// how big is the offset threshold when the section is in view (in percentage)
// By default 25% is set
//  can be change by adding data-threshold attribute in .snappy-scroller-wrapper
threshold = container.dataset.threshold ? container.dataset.threshold : "25" ;
// scroll event trigger change of indications
let last_known_scroll_position = 0;
const offset = window.innerHeight * (threshold / 100); // offset from the top position before the indication get highlighted
// lodash debounce reduces the constant of scroll events make the site more responsive
window.addEventListener('scroll',_.debounce(function(e){
  e.preventDefault()

  // the position of the container when scrolling
  last_known_scroll_position = document.documentElement.scrollTop;

  // Calculate which section is in view to highlight the indicator
  let currentPos = Math.floor((last_known_scroll_position + offset) / window.innerHeight);
  toggleIndicatorHighlight(currentPos)
}
,100 // level of debounce 
,{'leading':false,'trailing':true})) // update the scroll event when the scroll (trailing) finishes.

