import CargarArchivo from './CargarArchivo'

export default function FormCargarArchivo() {
  return (
    <div>
        <CargarArchivo titulo={'Subir PDF'} tipoArchivo={['.pdf']} archivo={'pdf'}/>
        <hr />
        <CargarArchivo titulo={'Subir Imagen'} tipoArchivo={['.png','.jpg','.jpeg']} archivo={'image'}/>

    </div>
  )
}
