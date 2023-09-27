const carruselPoliticos = [...document.querySelectorAll('.contenedor-carrusel')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];



carruselPoliticos.forEach((item, i) => {

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += 340;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= 340;
    })
})

