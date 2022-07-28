const imagenes = document.querySelectorAll(".img-galeria");
const imagenes2 = document.querySelector(".agregar-imagen");
const contenedorimg = document.querySelector(".imagen-close");
const menu1 = document.querySelector(".menu");
const menu = document.querySelector(".menu");
const navegacion = document.querySelector(".menu-navegacion");

imagenes.forEach(imagen =>{
    imagen.addEventListener("click", ()=>{
        mostrarImagen( imagen.getAttribute("src"))
    })
})


contenedorimg.addEventListener("click", (e)=>{
    console.log(e.target !== imagenes2);{
        contenedorimg.classList.toggle("mostrar")
        imagenes.classList.toggle("mostrar")
        menu1.style.opacity = "1"
    }
})

const mostrarImagen = (imagen)=>{
    imagenes2.src = imagen;
    contenedorimg.classList.toggle("mostrar")
    imagenes2.classList.toggle("agregar-imagen")
    menu1.style.opacity = "0"
}

menu.addEventListener("click", ()=>{
    navegacion.classList.toggle("spread")
    })

window.addEventListener("click", e=>{
    if(menu.classList.contains("spread")
      && e.target != menu && e.target != navegacion  ){
        menu.classList.contains("spread")
    }
})