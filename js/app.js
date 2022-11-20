const container = document.querySelector(".container");
const coffees = [
  {
    name: "Ventas",
    image: "images/ventas.jpg"
    link: "ventas.html"
  },
  {
    name: "Gastos",
    image: "images/gastos.jpg"
    link: "gastos.html"
  },
  {
    name: "Reportes",
    image: "images/reportes.jpg"
    link: "reportes.html"
  },
  {
    name: "Clientes",
    image: "images/clientes.jpg"
    link: "clientes.html"
  },
  {
    name: "Aprende",
    image: "images/aprende.jpg"
    link: "aprende.html"
  },
  {
    name: "Apoyo",
    image: "images/apoyo.jpg"
    link: "apoyo.html"
  },
  {
    name: "Objetivos",
    image: "images/lista.jpg"
    link: "objetivos.html"
  },
  {
    name: "Mi Motor",
    image: "images/motiva.jpg"
    link: "motiva.html"
  },
  {
    name: "Info",
    image: "images/acerca.jpg"
    link: "about.html"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href=link>IR</a>
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
