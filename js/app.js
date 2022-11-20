const container = document.querySelector(".container");
const coffees = [
  {
    name: "Ventas",
    image: "images/coffee1.jpg"
   //  link: "ventas.html"
  },
  {
    name: "Gastos",
    image: "images/coffee2.jpg"
  //  link: "gastos.html"
  },
  {
    name: "Reportes",
    image: "images/coffee3.jpg"
    // link: "reportes.html"
  },
  {
    name: "Clientes",
    image: "images/coffee4.jpg"
    // link: "clientes.html"
  },
  {
    name: "Aprende",
    image: "images/coffee6.jpg"
    // link: "aprende.html"
  },
  {
    name: "Apoyo",
    image: "images/coffee7.jpg"
    // link: "apoyo.html"
  },
  {
    name: "Objetivos",
    image: "images/coffee5.jpg"
   //  link: "objetivos.html"
  },
  {
    name: "Motivacion",
    image: "images/coffee8.jpg"
   //  link: "motiva.html"
  },
  {
    name: "Info",
    image: "images/coffee9.jpg"
   //  link: "about.html"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image}) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href=${name}".html">IR</a>
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
