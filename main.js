function cargarSeccion(nombre) {
  const contenedor = document.getElementById('contenido-dinamico');
  contenedor.innerHTML = "<p class='cargando'>Cargando...</p>";

  fetch(`secciones/${nombre}.html`)
    .then(res => {
      if (!res.ok) throw new Error("No se encontró la sección");
      return res.text();
    })
    .then(data => {
      contenedor.innerHTML = data;
      window.scrollTo({ top: 0, behavior: "smooth" });
    })
    .catch(err => {
      contenedor.innerHTML = `<p class='error'>⚠️ ${err.message}</p>`;
    });
}

//proyectos//   

visor.src = `archivos/semana${num}.pdf`;
