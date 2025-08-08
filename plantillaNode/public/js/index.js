const nombre = document.getElementById('nombre');
const password = document.getElementById('password');
const btnValida = document.getElementById('btnValida');

const usuarios = [
    {nombre: 'walter', pass: '1234'},
    {nombre: 'Maria', pass: '5678'},
];

btnValida.addEventListener('click', () => {
    const usuariosFiltrados = usuarios.filter(usuario => 
        usuario.nombre === nombre.value && 
        usuario.pass === password.value
    );
    
    if (usuariosFiltrados.length > 0) {
        console.log("Datos correctos, iniciando");
    } else {
        alert("Incorrecto");
    }
});
