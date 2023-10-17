const sliderContainer=document.querySelector('.slider-container');
const slideRight=document.querySelector('.right-slide');
const slideLeft=document.querySelector('.left-slide');
const down=document.querySelector('.down-button');
const up=document.querySelector('.up-button');
const length=slideRight.querySelectorAll('div').length;


let activeIndex=0;


slideLeft.style.top=`-${(length-1)*100}vh`


up.addEventListener('click',()=>changeslide('u'));
down.addEventListener('click',()=>changeslide('d'));
function changeslide(direction)
{
  const sliderHeight=sliderContainer.clientHeight;
  if(direction=='u')
  {
    activeIndex++;
    if(activeIndex>length-1)
    {
      activeIndex=0;
    }
  }
  else if( direction=='d')
  {
    activeIndex--;
    if(activeIndex<0)
    {
      activeIndex=length-1;
    }
  }
  slideLeft.style.transform=`translateY(+${activeIndex*sliderHeight}px)`;
  slideRight.style.transform=`translateY(-${activeIndex*sliderHeight}px)`;
}
