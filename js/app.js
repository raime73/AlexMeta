const container = document.querySelector(".container");
const myimg = [
  {
    name: "Ventas",
    image: "images/ventas.jpg"
  },
  {
    name: "Gastos",
    image: "images/gastos.jpg"
  },
  {
    name: "Reportes",
    image: "images/reportes.jpg"
  },
    {
    name: "Clientes",
    image: "images/clientes.jpg"
  },
  {
    name: "Aprende",
    image: "images/aprende.jpg"
  },
  {
    name: "Apoyo",
    image: "images/apoyo.jpg"
  },
  {
    name: "Objetivos",
    image: "images/lista.jpg"
  },
  {
    name: "Mi Motor",
    image: "images/motiva.jpg"
  },
  {
    name: "Info",
    image: "images/acerca.jpg"
  }
];
const showImages = () => {
  let output = "";
  myimg.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Ir</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showImages);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
