const NUMBER_OF_snow=30;function init()
{var container=document.getElementById('snowContainer');for(var i=0;i<NUMBER_OF_snow;i++)
{container.appendChild(createAsnow());}}
function randomInteger(low,high)
{return low+ Math.floor(Math.random()*(high- low));}
function randomFloat(low,high)
{return low+ Math.random()*(high- low);}
function pixelValue(value)
{return value+'px';}
function durationValue(value)
{return value+'s';}
function createAsnow()
{var snowDiv=document.createElement('div');var image=document.createElement('img');image.src='snow'+ randomInteger(1,6)+'.png';snowDiv.style.top="-100px";snowDiv.style.left=pixelValue(randomInteger(0,1000));var spinAnimationName=(Math.random()<0.5)?'clockwiseSpin':'counterclockwiseSpinAndFlip';snowDiv.style.webkitAnimationName='fade, drop';image.style.webkitAnimationName=spinAnimationName;var fadeAndDropDuration=durationValue(randomFloat(5,11));var spinDuration=durationValue(randomFloat(4,8));snowDiv.style.webkitAnimationDuration=fadeAndDropDuration+', '+ fadeAndDropDuration;var snowDelay=durationValue(randomFloat(0,5));snowDiv.style.webkitAnimationDelay=snowDelay+', '+ snowDelay;image.style.webkitAnimationDuration=spinDuration;snowDiv.appendChild(image);return snowDiv;}
window.addEventListener('load',init,false);