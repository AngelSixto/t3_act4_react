import { useState } from 'react'
import TareaItem from './TareaItem'

// Arreglo inicial de tareas
const tareasIniciales = [
  { id: 1, texto: 'Ver el video de React', completada: true },
  { id: 2, texto: 'Crear el proyecto con Vite', completada: false },
  { id: 3, texto: 'Subir el proyecto a GitHub Pages', completada: false },
]

// c) Componente con estado (useState)
// d) Lista renderizada dinámicamente con .map() y key
function ListaTareas() {
  const [tareas, setTareas] = useState(tareasIniciales)
  const [nuevaTarea, setNuevaTarea] = useState('')
  const [filtro, setFiltro] = useState('todas')

  // Evento: agregar una tarea nueva
  const agregarTarea = (e) => {
    e.preventDefault()
    if (nuevaTarea.trim() === '') return

    const tarea = {
      id: Date.now(), // id único para usarlo como key
      texto: nuevaTarea.trim(),
      completada: false,
    }
    setTareas([...tareas, tarea])
    setNuevaTarea('')
  }

  // Evento: marcar / desmarcar una tarea como completada
  const completarTarea = (id) => {
    setTareas(
      tareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t))
    )
  }

  // Evento: eliminar una tarea
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id))
  }

  // Funcionalidad adicional: filtrar tareas
  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === 'pendientes') return !t.completada
    if (filtro === 'completadas') return t.completada
    return true
  })

  const pendientes = tareas.filter((t) => !t.completada).length

  return (
    <section className="tarjeta">
      <h2>Lista de tareas</h2>

      <form className="formulario" onSubmit={agregarTarea}>
        <input
          type="text"
          placeholder="Escribe una nueva tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button type="submit" className="boton">Agregar</button>
      </form>

      <div className="filtros">
        {['todas', 'pendientes', 'completadas'].map((f) => (
          <button
            key={f}
            className={filtro === f ? 'filtro activo' : 'filtro'}
            onClick={() => setFiltro(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Renderizado condicional: mensaje si no hay tareas */}
      {tareasFiltradas.length === 0 ? (
        <p className="vacio">No hay tareas para mostrar 🎉</p>
      ) : (
        <ul className="lista">
          {tareasFiltradas.map((tarea) => (
            <TareaItem
              key={tarea.id}
              tarea={tarea}
              onCompletar={completarTarea}
              onEliminar={eliminarTarea}
            />
          ))}
        </ul>
      )}

      <p className="contador">
        Tienes <strong>{pendientes}</strong> tarea(s) pendiente(s) de {tareas.length}
      </p>
    </section>
  )
}

export default ListaTareas
