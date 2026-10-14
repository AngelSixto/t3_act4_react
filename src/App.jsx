import Encabezado from './components/Encabezado'
import TarjetaPerfil from './components/TarjetaPerfil'
import ListaTareas from './components/ListaTareas'

// Componente principal: une todos los demás componentes
function App() {
  return (
    <main className="contenedor">
      {/* a) Componente funcional simple */}
      <Encabezado />

      {/* b) Componente que recibe y muestra props */}
      <TarjetaPerfil
        nombre="Sixto Morales Angel"
        carrera="Ingeniería en Sistemas Computacionales"
        escuela="Instituto Tecnológico de Oaxaca"
        grupo="7SD"
      />

      {/* c) y d) Componente con useState y lista renderizada con .map() */}
      <ListaTareas />
    </main>
  )
}

export default App
