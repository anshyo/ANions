const hopenbtn=document.querySelector('.shows .hello-animation .preview');
const hello=document.querySelector('.shows .hello-animation');
const helloin=document.querySelector('.shows .hello-animation .preview h1');

const sopenbtn=document.querySelector('.shows .sphere .preview');
const sphere=document.querySelector('.shows .sphere');
const spherein=document.querySelector('.shows .sphere .preview .spheree');
const sphereincs=document.querySelector('.shows .sphere .preview .p .spheree .s-3 .cs');
const sphereincs1=document.querySelector('.shows .sphere .preview .p .spheree .s-1 .cs');
const sphereincs2=document.querySelector('.shows .sphere .preview .p .spheree .s-2 .cs');


hopenbtn.addEventListener('click', () => {
    hello.classList.toggle('showa');
    helloin.classList.toggle('h1');
    hopenbtn.classList.toggle('previewa');
})

sopenbtn.addEventListener('click', () => {
    sphere.classList.toggle('showa');
    spherein.classList.toggle('sphereee');
    sopenbtn.classList.toggle('previewa');
    sphereincs.classList.remove('css');
    sphereincs1.classList.remove('css');
    sphereincs2.classList.remove('css');
})