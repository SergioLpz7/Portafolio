document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".li");

  for (let i = 0; i < listItems.length; i++) {
    const listItem = listItems[i];

    listItem.querySelector("p").addEventListener("click", function () {

      const li = this.parentElement;
      for (j = 0; j < listItems.length; j++) {
        listItems[j].classList.remove("active");
        li.classList.add("active");
      }
    });
  }

  const info = document.getElementById("info");
  const proyects = document.getElementById("proyects");

  const datos = document.querySelector(".datos");
  const proyectos = document.querySelector(".lista-proyectos");

  const temas = document.querySelector("#temas");

  info.addEventListener("click", function () {
    datos.style.display = "flex";
    proyectos.style.display = "none";
    info.textContent = "•";
    proyects.textContent = "Proyectos";
    temas.style.display = "none";
  });
  proyects.addEventListener("click", function () {
    datos.style.display = "none";
    proyectos.style.display = "flex";
    proyects.textContent = "•";
    info.textContent = "Info";
    temas.style.display = "flex";
  });

});
function MostrarTema (numeroTema) {
  var Arraytemas = document.getElementById("temas").children;
  for (var i = 0; i < Arraytemas.length; i++) {
    Arraytemas[i].style.display = "none";
  }

  var temaSeleccionado = document.getElementById("tema" + numeroTema);
  temaSeleccionado.style.display = "grid";
}
