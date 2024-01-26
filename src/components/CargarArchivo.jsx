/* eslint-disable react/prop-types */
import { useState } from "react";

function CargarArchivo(props) {
    const [titulo, setTitulo] = useState('');
    const [file, setPdfFile] = useState(null);
    console.log(props)
    
    const URL=`http://localhost:3001/api/prueba/${props.archivo}`
    
    
    const handleFileChange = (e) => {
        setPdfFile(e.target.files[0]);
        setTitulo(e.target.files[0].name);
        console.log(e)
    };
    
    const handleSubmit = async (e) => {
        const tituloSinExtension = titulo.slice(0,titulo.lastIndexOf('.')) 
    console.log(tituloSinExtension,'tituloSinExtension')
    e.preventDefault();
    const formData = new FormData();
    formData.append('file',file);
    formData.append('titulo', tituloSinExtension);
    try {
      const response = await fetch(URL, {
        method: 'POST',
        body: formData,
      });

      // Verificar si la solicitud fue exitosa (código de estado 200-299)
      if (response.ok) {
        const responseData = await response.json();
        console.log('Respuesta del servidor:', responseData);
      } else {
        // Manejar errores
        console.error(
          'Error en la solicitud:',
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <>
    <h2>{props.titulo}</h2>
    <form onSubmit={handleSubmit}>

        <input type='file' accept={props.tipoArchivo} onChange={handleFileChange}  />
      <button type='submit' style={{
        width:100,
          marginLeft: '10px',
          padding: '10px 15px',
          backgroundColor: '#0F6525',
          color: '#ffffff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>Enviar</button>
    </form>
    </>
  );
}

export default CargarArchivo;
