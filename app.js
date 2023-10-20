let card=document.querySelector('.card');
let container=document.querySelector('.container');
let sneker=document.querySelector('img');
let title=document.querySelector('.title');
let desc=document.querySelector('p');
let purchase=document.querySelector('.purchase button');
let sizes=document.querySelector('.sizes');

container.addEventListener('mousemove',(e)=>{
    let xAxis=(window.innerWidth / 2 -e.pageX) / 10 ;
    let yAxis=(window.innerHeight / 2 -e.pageY) /10 ;
    card.style.transform=`rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

container.addEventListener('mouseenter',(e)=>{
    sneker.style.transform="rotate(-70deg) translateZ(200px)";

    card.style.transition='none';
   
    title.style.transform="translateZ(150px)";
    sizes.style.transform="translateZ(150px)";
    desc.style.transform="translateZ(150px)";
   
})

container.addEventListener('mouseleave',(e)=>{
    card.style.transition='all 0.5s ease';
    card.style.transform=`rotateX(${0}deg) rotateY(${0}deg)`;
    title.style.transform='translateZ(0px)';
    sneker.style.transform="rotate(0deg)"

})