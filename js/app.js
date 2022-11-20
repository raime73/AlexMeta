const container = document.querySelector(".container");
const coffees = [
  {
    name: "Ventas",
    image: "images/coffee1.jpg"
  },
  {
    name: "Gastos",
    image: "images/coffee2.jpg"
  },
  {
    name: "Reportes",
    image: "images/coffee3.jpg"
  },
  {
    name: "Clientes",
    image: "images/coffee4.jpg"
  },
  {
    name: "Aprende",
    image: "images/coffee5.jpg"
  },
  {
    name: "Apoyo",
    image: "images/coffee6.jpg"
  },
  {
    name: "Objetivos",
    image: "images/coffee7.jpg"
  },
  {
    name: "Mi Motor",
    image: "images/coffee8.jpg"
  },
  {
    name: "Info",
    image: "images/coffee9.jpg"
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
                <a class="card--link" href="#">Taste</a>
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
