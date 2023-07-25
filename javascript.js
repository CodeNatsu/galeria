document.addEventListener('DOMContentLoaded', function() {

    let imagenes = [
        { img: 'imagen1.jpg' },
        { img: 'imagen2.jpg' },
        { img: 'imagen3.jpg' },
        { img: 'imagen4.jpg' },
        { img: 'imagen5.jpg' },
        { img: 'imagen6.jpg' },
        { img: 'imagen7.jpg' },
        { img: 'imagen8.jpg' },
        { img: 'imagen9.jpg' },
        { img: 'imagen10.jpg' },
        { img: 'imagen11.jpg' },
        { img: 'imagen12.jpg' },
        { img: 'imagen13.jpg' },
        { img: 'imagen14.jpg' },
        { img: 'imagen15.jpg' },
        { img: 'imagen16.jpg' },
        { img: 'imagen17.jpg' },
        { img: 'imagen18.jpg' },
        { img: 'imagen19.jpg' },
        { img: 'imagen20.jpg' },
        { img: 'imagen21.jpg' },
        { img: 'imagen22.jpg' },
        { img: 'imagen23.jpg' },
        { img: 'imagen24.png' },
        { img: 'imagen25.png' },
       
    ];

    let contador = 0
    const contenedor = document.querySelector('.slideshow');
    const overlay = document.querySelector('.overlay');
    const galeria_imagenes = document.querySelectorAll('.galeria img');
    const img_slideshows = document.querySelector('.slideshow img');


    contenedor.addEventListener('click', function(event) {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1].img
                contador = imagenes.length - 1
            }
        } else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }
        }

    })
    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada = +event.target.dataset.imgMostrar
            img_slideshows.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    document.querySelector('.btn_cerrar').addEventListener('click', () => {
        overlay.style.opacity = 0
        overlay.style.visibility = "hidden"
    } )
    
})