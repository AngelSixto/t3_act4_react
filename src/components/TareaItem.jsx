// Componente que recibe props: los datos de una tarea y las funciones
// que el padre (ListaTareas) le pasa para completar o eliminar
function TareaItem({ tarea, onCompletar, onEliminar }) {
  return (
    <li className={tarea.completada ? 'tarea completada' : 'tarea'}>
      <label>
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => onCompletar(tarea.id)}
        />
        <span>{tarea.texto}</span>
      </label>
      <button
        className="boton eliminar"
        onClick={() => onEliminar(tarea.id)}
        aria-label="Eliminar tarea"
      >
        ✕
      </button>
    </li>
  )
}

export default TareaItem
