const container = document.querySelector(".container");
const coffees = [
  {
    name: "Instalación en Celular",
    image: "images/instalaCel.jpg",
    link: "instalaCel.pdf"
  },
  {
    name: "Instalación en PC",
    image: "images/instalaCompu.jpg",
    link: "instalaPC.pdf"
  },
  {
    name: "Carta de terminación",
    image: "images/docuApoyo.jpg",
    link: "carta.pdf"
  }, 
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
