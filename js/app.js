const container = document.querySelector(".container");
const coffees = [
  {
    name: "Operaciones",
    image: "images/opera.jpg",
    link: "Opera/index.html"
  },
  {
    name: "Registro",
    image: "images/registro.jpg",
    link: "Registro/index.html"
  },
  {
    name: "Reportes",
    image: "images/reporte.jpg",
    link: "Reportes/index.html"
  },
  {
    name: "Clientes",
    image: "images/clientes.jpg",
    link: "Clientes/index.html"
  },
  {
    name: "Apoyo",
    image: "images/apoyo.jpg",
    link: "Apoyo/index.html"
  },
  {
    name: "Objetivos",
    image: "images/objetivo.jpg",
    link: "Objetivos/index.html"
  },
  {
    name: "Mi motor",
    image: "images/motivo.jpg",
    link: "Motivos/index.html"
  },
  {
    name: "Info",
    image: "images/info.jpg",
    link: "Info/index.html"
  },
  {
    name: "Actualizar",
    image: "images/actualiza.jpg",
    link: "Actualiza/index.html"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image, link}) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href=${link}>IR</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
