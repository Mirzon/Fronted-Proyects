
const enlaces = document.querySelectorAll('.enlace');

function mostrarPestaña(num) {

    const pestañas = document.querySelectorAll('.pestaña');

    pestañas.forEach(pestaña => pestaña.classList.remove('active'));    
    enlaces.forEach(enlace => enlace.classList.remove('active'));

    pestañas[num].classList.add('active');
    enlaces[num].classList.add('active');
}

enlaces.forEach((enlace,indice) => {
    enlace.addEventListener('click', () => mostrarPestaña(indice));
});