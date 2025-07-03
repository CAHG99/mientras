const url = "http://localhost:3000/users";

// Leer todos los usuarios GET

function obtenerUsuarios() {
  fetch(url)
    .then(response => {
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }
    return response.json(); // solo se ejecuta si el código de estado es 2xx
  })
  .then(data => {
    console.log("Datos recibidos:", data);
  })
  .catch(error => {
    console.error("Ocurrió un error:", error.message);
  });
}

// Crear un usuario POST
function crearUsuario() {
 
  const nuevoUsuario = {
    nombre: "usuario nuevo",
    correo: "nuevo@email.com",
    contraseña: "5678",
    rol: "usuario"
  };

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevoUsuario)
  })
    .then(res => res.json())
    .then(data => console.log("Usuario creado:", data));
}

// Editar un usuario (por ID) PUT
function editarUsuario(id) {
  const cambios = {
    nombre: "nombre actualizado"
  };

  fetch(`${url}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cambios)
  })
    .then(res => res.json())
    .then(data => console.log("Usuario actualizado:", data));
}

//  Eliminar un usuario DELETE
function eliminarUsuario(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE"
  })
    .then(() => console.log("Usuario eliminado:", id));
}

// Ejemplos de uso
obtenerUsuarios();     // Muestra todos los usuarios
crearUsuario();        // Crea un nuevo usuario
editarUsuario(1);      // Edita el usuario con ID 1
eliminarUsuario(1);    // Edita el usuario con ID 1