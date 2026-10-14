import { useState } from 'react'

// b) Componente que recibe props (nombre, carrera, escuela, grupo)
//    Además usa un estado para mostrar/ocultar los detalles (renderizado condicional)
function TarjetaPerfil({ nombre, carrera, escuela, grupo }) {
  const [mostrarDetalles, setMostrarDetalles] = useState(false)

  return (
    <section className="tarjeta perfil">
      <div className="avatar">{nombre.charAt(0)}</div>
      <div className="perfil-info">
        <h2>{nombre}</h2>

        {mostrarDetalles && (
          <ul className="perfil-detalles">
            <li><strong>Carrera:</strong> {carrera}</li>
            <li><strong>Escuela:</strong> {escuela}</li>
            <li><strong>Grupo:</strong> {grupo}</li>
          </ul>
        )}

        <button
          className="boton secundario"
          onClick={() => setMostrarDetalles(!mostrarDetalles)}
        >
          {mostrarDetalles ? 'Ocultar detalles' : 'Ver detalles'}
        </button>
      </div>
    </section>
  )
}

export default TarjetaPerfil
