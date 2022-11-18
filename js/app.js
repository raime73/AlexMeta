const container = document.querySelector(".container");
const myImages = [
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
    name: "clientes",
    image: "images/clientes.jpg"
  }
];
const showMenu = () => {
  let output = "";
  myImages.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showMenu);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}