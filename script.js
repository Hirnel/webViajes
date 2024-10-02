// let contenedorSelector = document.querySelector("main section:last-child");

// contenedorSelector.innerHTML += 

const viajes = [
  {
    titulo: "viaje 3",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut fermentum justo...",
    imgSrc: "./imagenes/viaje-3"
  },
  {
    titulo: "viaje 4",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut fermentum justo...",
    imgSrc: "./imagenes/viaje-4"
  },
  {
    titulo: "viaje 5",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut fermentum justo...",
    imgSrc: "./imagenes/viaje-5"
  }
];


const lista = `<section class="contenedor-imagenes">
                  <article class="imagen">
                    <img src="./imagenes/viajes-4.jpg" alt="viaje 4">
                    <h3>viaje 4</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut fermentum justo...</p>
                  </article>
                  <article class="imagen">
                    <img src="./imagenes/viajes-5.jpg" alt="viaje 5">
                    <h3>viaje 5</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut fermentum justo...</p>
                  </article>
                  <article class="imagen">
                    <img src="./imagenes/viajes-7.jpg" alt="viaje 7">
                    <h3>viaje 7</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut fermentum justo...</p>
                  </article>
                </section>`;

                document.getElementById("imageContainer").innerHTML = lista;
                