window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 250) { // Define a posição em que a navbar desce
        navbar.style.top = '0'; // Altura desejada quando a navbar desce
    } else {
        navbar.style.top = '30px'; // Volta ao topo quando a página é rolada para cima
    }
});

const home = document.querySelector('.home')
home.addEventListener('click', () => {
    window.location = '/index.html'
})

const link = document.querySelector('.link')
const insta = document.querySelector('.insta')
const github = document.querySelector('.github')

link.addEventListener('click', () => {
    window.open("https://br.linkedin.com/in/leonardo-jo%C3%A3o-fleith", "_blank");
})
insta.addEventListener('click', () => {
    window.open("https://www.instagram.com/kako.fleith", "_blank");
})
github.addEventListener('click', () => {
    window.open("https://github.com/LeonardoKako", "_blank");
})