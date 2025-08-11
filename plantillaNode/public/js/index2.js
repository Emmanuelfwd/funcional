console.log("hola");

import { postUsers, getUsers, deleteUser, putUsers } from "../services/servicios.js";

// Obtener elementos del DOM
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const edad = document.getElementById("edad");
const btnGuardar = document.getElementById("btnGuardar");
const usuarioscrear = document.getElementById("crearUsuario");

// Evento para guardar un nuevo usuario
btnGuardar.addEventListener("click", async function () {
  const nuevo = {
    nombre: nombre.value,
    edad: edad.value,
    correo: correo.value    
  };

  try {
    const respuestaConfirmada = await postUsers(nuevo);
    console.log(respuestaConfirmada);
    await datosRecibidos(); // Recargar la lista de usuarios tras agregar uno nuevo
  } catch (error) {
    console.error("Error al guardar el usuario:", error);
  }
});

// Función para obtener y mostrar usuarios
async function datosRecibidos() {
  try {
    const datosdeusuarioRecibidos = await getUsers();

    // Limpiar contenido previo
    usuarioscrear.innerHTML = "";

    // Iterar y mostrar cada usuario
    for (let index = 0; index < datosdeusuarioRecibidos.length; index++) {
      const usuario = datosdeusuarioRecibidos[index];

      // Crear contenedor para el usuario
      const contenedor = document.createElement("div");

      // Crear párrafo con los datos
      const parrafo = document.createElement("p");
      parrafo.textContent = datosdeusuarioRecibidos[index].nombre

      // Crear botón de eliminar
      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";

      // Agregar evento para eliminar del DOM y del servidor
      btnEliminar.addEventListener("click", async function () {
        try {
          await deleteUser(usuario.id); 
          usuarioscrear.removeChild(contenedor); 
        } catch (error) {
          console.error("Error al eliminar usuario:", error);
        }
      });

      // Agregar elementos al contenedor
      contenedor.appendChild(parrafo);
      contenedor.appendChild(btnEliminar);

      // Agregar contenedor al DOM
      usuarioscrear.appendChild(contenedor);
    }
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
  }
}

// Llamar a la función para cargar usuarios al inicio
datosRecibidos();