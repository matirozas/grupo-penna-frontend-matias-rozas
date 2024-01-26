import { useState } from "react";

// const fakeData = [
//   {
//     nombre: "Juan",
//     apellido: "Pérez",
//     numero: "+15551234",
//     fecha: "1990-05-15",
//   },
//   {
//     nombre: "María",
//     apellido: "Gómez",
//     numero: "+15552345",
//     fecha: "1985-08-22",
//   },
//   {
//     nombre: "Carlos",
//     apellido: "Rodríguez",
//     numero: "+15553456",
//     fecha: "1982-11-10",
//   },
//   {
//     nombre: "Laura",
//     apellido: "Hernández",
//     numero: "+15554567",
//     fecha: "1995-02-28",
//   },
//   {
//     nombre: "José",
//     apellido: "Martínez",
//     numero: "+15555678",
//     fecha: "1988-07-07",
//   },
// ];

export default function RenderizarDatos() {
  
  const [users,setUsers] = useState({})
  const [ toggleUser, setToggleUser] = useState(false)
  
  const handleVer = () => {
        fetch("http://localhost:3001/api/prueba/users/9")
          .then((response) => response.json())
          .then((data) => setUsers(data.user));
      setToggleUser(!toggleUser)
  };

  return (
    <section>
      <h2>Datos de Usuarios</h2>
          <button style={{
              width:150,
              marginLeft: '10px',
              padding: '10px 15px',
              backgroundColor: '#0F6525',
              color: '#ffffff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }} onClick={handleVer}>Datos de usuario</button>
      <div style={{ display: "flex", flexWrap:"wrap",justifyContent:"center"}}>
            {toggleUser?(

        <div
        style={{
            width: '250px',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#ffffff',
            textAlign: 'center',
            margin:20,
            justifyContent:'center'
        }}
>
  <h2
    style={{
        color: '#333333',
        fontSize: '1.5em',
        marginBottom: '10px',
    }}
    >
    {users.nombre} {users.apellido}
  </h2>
  <h3
    style={{
        color: '#555555',
        fontSize: '1.2em',
        marginBottom: '10px',
    }}
    >
    {users.numero}
  </h3>
  <h3
    style={{
        color: '#777777',
        fontSize: '1em',
        marginBottom: '10px',
    }}
    >
    {users.fecha}
  </h3>
</div>
):null
}

            
          
      </div>
    </section>
  );
}
