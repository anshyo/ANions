const opener=document.querySelector('.cover .open');
const downgo1=document.querySelector('.cover .open .down');
const downgo2=document.querySelector('.cover .open .openotice');
const downgo3=document.querySelector('.cover .open  .name');
const upgo=document.querySelector('.cover .open .menu');
const main=document.querySelector('.cover');
const mainshow=document.querySelector('.cover .mainshow');
const back=document.querySelector('.cover .mainshow .back');

opener.addEventListener('click', () => {
    opener.classList.add('down');
    downgo1.classList.add('downgo');
    downgo2.classList.add('downgo');
    downgo3.classList.add('downgo');
    upgo.classList.add('downgo');
    main.classList.add('main');
    mainshow.classList.add('mainshowafter');
    back.classList.add('backafter');
})
back.addEventListener('click', () => {
    back.classList.remove('backafter');
    opener.classList.remove('down');
    downgo1.classList.remove('downgo');
    downgo2.classList.remove('downgo');
    downgo3.classList.remove('downgo');
    upgo.classList.remove('downgo');
    main.classList.remove('main');
    mainshow.classList.remove('mainshowafter');
})