let slideIndex = 1 ;
let remainingtime = 70000;
function setTime(){
    if(remainingtime==0)return;
    let h = Math.floor(remainingtime/3600);
    let m = Math.floor((remainingtime%3600)/60)
    let s = (remainingtime%3600)%60;
    document.querySelector('#hours').innerHTML = h;
    document.querySelector('#seconds').innerHTML = s;
    document.querySelector('#minutes').innerHTML = m;

}
setInterval(() => {
        remainingtime-=1 ;
        setTime();
}, 1000);
function setSlide(input,index){
    slideIndex = index;
    let item = document.querySelector(`#${input}`)
    let slides = [...document.querySelector('.slides').children] ;
    slides.forEach((element)=>{
        if(element.classList.contains('active')){
            element.classList.remove('active');
            element.classList.add('previos');
            
        }
    })
    item.classList.add('active');
    item.classList.remove('previos');
}

setInterval(()=>{
    slideIndex +=1;
    if(slideIndex==4){
        slideIndex=1;
    }
    setSlide(`slide${slideIndex}` , slideIndex)
} , 5000)
