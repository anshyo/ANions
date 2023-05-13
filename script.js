const hopenbtn=document.querySelector('.shows .hello-animation .preview');
const hello=document.querySelector('.shows .hello-animation');
const helloin=document.querySelector('.shows .hello-animation .preview h1');

const sopenbtn=document.querySelector('.shows .sphere .preview');
const sphere=document.querySelector('.shows .sphere');
const spherein=document.querySelector('.shows .sphere .preview .spheree');
const sphereincs=document.querySelector('.shows .sphere .preview .p .spheree .s-3 .cs');
const sphereincs1=document.querySelector('.shows .sphere .preview .p .spheree .s-1 .cs');
const sphereincs2=document.querySelector('.shows .sphere .preview .p .spheree .s-2 .cs');

const sandd=document.querySelector('.shows .sand');
const sand=document.querySelector('.shows .sand .preview');
const sandin=document.querySelector('.shows .sand .preview .area');
const sandclock=document.querySelector('.shows .sand .preview .area .glass-in');
const sands1=document.querySelector('.shows .sand .preview .area .glass .part-1 .up .sand');
const sands2=document.querySelector('.shows .sand .preview .area .glass .part-2 .up .sand');
const sandl1=document.querySelector('.shows .sand .preview .area .glass .part-1 .up .line');
const sandl2=document.querySelector('.shows .sand .preview .area .glass .part-2 .up .line');

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

sand.addEventListener('click', () => {
    sandd.classList.toggle('showa');
    sandin.classList.toggle('areaa');
    sands1.classList.toggle('sanda');
    sands2.classList.toggle('sandb');
    sandl1.classList.toggle('linea');
    sandl2.classList.toggle('lineb');
    sandclock.classList.toggle('glass-ina');
    sand.classList.toggle('previewa');
})