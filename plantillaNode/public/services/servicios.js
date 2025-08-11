async function postUsers(usuario) {
  try {
    const response = await fetch("http://localhost:3001/usuarios", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    });

    const users = await response.json();
    return users;
  } catch (error) {
    console.error("hay un error al crear los usuarios", error);
    throw error;
  }
}

// Obtener todos los usuarios
async function getUsers() {
  try {
    const response = await fetch("http://localhost:3001/usuarios", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const users = await response.json();
    return users;
  } catch (error) {
    console.error("hay un error al obtener los usuarios", error);
    throw error;
  }
}

// Eliminar usuario por ID (CORREGIDO)
async function deleteUser(id) {
  try {
    const response = await fetch(`http://localhost:3001/usuarios/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("hay un error al eliminar el usuario", error);
    throw error;
  }
}


async function putUsers(users,id) {
  try {
    const response = await fetch(`http://localhost:3001/usuarios/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("hay un error al eliminar el usuario", error);
    throw error;
  }
}

// Exportar todas las funciones en una sola línea
export { postUsers, getUsers, deleteUser, putUsers };