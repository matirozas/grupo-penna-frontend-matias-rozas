import './App.css'
import Carrusel from './components/Carrusel'
import FormCargarArchivo from './components/FormCargarArchivo'
import FormUser from './components/FormUser'
import RenderDescargaPdf from './components/RenderDescargaPdf'
import RenderizarDatos from './components/RenderizarDatos'

function App() {

  return (
   <section className='app'>
   <FormUser /> <hr />
   <FormCargarArchivo /> <hr />
   <RenderizarDatos /> <hr />
   <RenderDescargaPdf /> <hr />
   <Carrusel />
   </section>
  )
}

export default App
