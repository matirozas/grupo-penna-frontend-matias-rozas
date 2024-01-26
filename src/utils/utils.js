const URL = 'http://localhost:3001/api/prueba/users';

export async function postNewUser(user) {

   await fetch(URL, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
        
}

export const validarInput = (usuario) =>{
  const validarNombre = (nombre) => {
    return /^[A-Za-z\s'-]+$/.test(nombre.trim());
  };
  
  const validarApellido = (apellido) => {
    return /^[A-Za-z\s'-]+$/.test(apellido.trim());
  };
  
  const validarTelefono = (numero) => {
    return /^\d{10,}$/g.test(numero);
  };
  const validarFecha = (fecha) => {
    return !isNaN(Date.parse(fecha));
  };
    if(validarNombre(usuario.nombre) && 
    validarApellido(usuario.apellido) && 
    validarTelefono( usuario.numero) && 
    validarFecha ( usuario.fecha)) return true
 }
