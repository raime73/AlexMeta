const container = document.querySelector(".container");
const coffees = [
  {
    name: "Ventas",
    image: "images/coffee1.jpg",
    link: "Ventas/index.html"
  },
  {
    name: "Gastos",
    image: "images/coffee2.jpg",
    link: "Gastos/index.html"
  },
  {
    name: "Reportes",
    image: "images/coffee3.jpg",
    link: "Reportes/index.html"
  },
  {
    name: "Clientes",
    image: "images/coffee4.jpg",
    link: "Clientes/index.html"
  },
  {
    name: "Aprende",
    image: "images/coffee6.jpg",
    link: "Aprende/index.html"
  },
  {
    name: "Apoyo",
    image: "images/coffee7.jpg",
    link: "Apoyo/index.html"
  },
  {
    name: "Objetivos",
    image: "images/coffee5.jpg",
    link: "Objetivos/index.html"
  },
  {
    name: "Motivacion",
    image: "images/coffee8.jpg",
    link: "Motivacion/index.html"
  },
  {
    name: "Info",
    image: "images/coffee9.jpg",
    link: "Info/index.html"
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
