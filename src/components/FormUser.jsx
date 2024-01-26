import { useState } from "react";
import Input from "./Input";
import { postNewUser, validarInput } from "../utils/utils";

export default function FormUser() {
  const [input, setInput] = useState({
    nombre: '',
    apellido: '',
    numero: '',
    fecha:'',
  });

  const onChangeInput = (e) => {
    e.preventDefault();
    setInput((input)=>({ ...input, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    
    try {
      const check = validarInput(input)
      if(check){

        const response = await postNewUser(input);
        console.log(response, 'response');
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        
        const responseData = await response.json();
        console.log('Success:', responseData);
        console.log('Usuario enviado con éxito');
        setInput({
          nombre: '',
          apellido: '',
          numero: '',
          fecha: '',
        });
        
      }else{console.log('fallo')}
      } catch (error) {
        console.error('Error:', error.message);
    }
  };

  return (
    <section style={{marginBottom:40}} >
      <h2 style={{textAlign:'center'}}>Cargar Usuario</h2>
      <form style={{display:'flex', flexDirection:'column',alignItems:"center"}}>
        <Input
          type='text'
          placeholder='Nombre'
          name={'nombre'}
          value={input.nombre}
          onChange={onChangeInput}
        />
        <Input
          type='text'
          placeholder='Apellido'
          name={'apellido'}
          value={input.apellido}
          onChange={onChangeInput}
        />
        <Input
          type='number'
          placeholder='Telefono'
          name={'numero'}
          value={input.numero}
          onChange={onChangeInput}
        />
        <Input
          type='date'
          name={'fecha'}
          value={input.fecha}
          onChange={onChangeInput}
        />
        <button type='button' style={{
          width:100,
          marginLeft: '10px',
          padding: '10px 15px',
          backgroundColor: '#0F6525',
          color: '#ffffff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }} onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </section>
  );
}
