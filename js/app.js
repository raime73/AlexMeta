const container = document.querySelector(".container");
const coffees = [
  {
    name: "Ventas",
    image: "images/ventas.jpg",
    link: "Ingresos/index.html"
  },
  {
    name: "Egresos",
    image: "images/gastos.jpg",
    link: "Gastos/index.html"
  },
  {
    name: "Alta de productos",
    image: "images/registro.jpg",
    link: "Registro/index.html"
  },
  {
    name: "Reportes Ventas",
    image: "images/reporte.jpg",
    link: "Reportes/index.html"
  },
  {
    name: "Reportes Egresos",
    image: "images/reporteg.jpg",
    link: "RepoGastos/index.html"
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
