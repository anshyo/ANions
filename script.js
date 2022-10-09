const openbtn=document.querySelector('.shows .s2 .optionsbdr');
const catagories1=document.querySelector('.shows .s2 .heading .c1');
const catagories2=document.querySelector('.shows .s2 .heading .c2');
const catagories3=document.querySelector('.shows .s2 .heading .c3');
const slide=document.querySelector('.shows .s2 .heading .slide');

openbtn.addEventListener('click', () => {
    catagories1.classList.toggle('catagoriesafter');
    catagories2.classList.toggle('catagoriesafter');
    catagories3.classList.toggle('catagoriesafter');
    slide.classList.toggle('slideafter');
})
