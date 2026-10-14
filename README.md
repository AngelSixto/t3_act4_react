# t3_act4_react — Mis Tareas (Introducción a React)

**Alumno:** Sixto Morales Angel
**Materia:** Programación Web — Ing. Adelina Martínez Nieto
**Grupo:** 7SD — Instituto Tecnológico de Oaxaca (TecNM)
**Actividad:** 4.- Act4. Introducción a React - Fundamentos y Primer Componente

---

## 📌 Descripción del proyecto

**Mis Tareas** es una mini aplicación hecha con **React + Vite** que permite administrar una lista de pendientes. Sirve para practicar los conceptos fundamentales de React: componentes, props, estado (`useState`), eventos, renderizado condicional y listas.

### Funcionalidades
- Ver una tarjeta de perfil con mis datos (con botón para mostrar/ocultar detalles).
- Agregar tareas nuevas desde un formulario.
- Marcar o desmarcar tareas como completadas.
- Eliminar tareas.
- **Funcionalidad adicional:** filtrar tareas por *Todas*, *Pendientes* o *Completadas*, y un contador de tareas pendientes.

### Estructura de componentes

| Componente | Archivo | Qué practica |
|---|---|---|
| `Encabezado` | `src/components/Encabezado.jsx` | **a)** Componente funcional simple |
| `TarjetaPerfil` | `src/components/TarjetaPerfil.jsx` | **b)** Recibe y muestra props (`nombre`, `carrera`, `escuela`, `grupo`) + renderizado condicional |
| `ListaTareas` | `src/components/ListaTareas.jsx` | **c)** Estado con `useState` y eventos · **d)** Lista renderizada con `.map()` y `key` |
| `TareaItem` | `src/components/TareaItem.jsx` | Recibe props (datos de la tarea y funciones del padre) |
| `App` | `src/App.jsx` | Componente principal que une a todos |

### Tecnologías
- React 19
- Vite
- gh-pages (para publicar en GitHub Pages)

### Cómo ejecutarlo en local
```bash
npm install
npm run dev
```
Luego abrir la dirección que muestra la terminal (normalmente `http://localhost:5173/t3_act4_react/`).

### Cómo publicarlo
```bash
npm run deploy
```

---

## ❓ Cuestionario

### a) ¿Qué diferencia hay entre props y state en React?
Las **props** son datos que un componente **recibe desde afuera**, de su componente padre, como si fueran los parámetros de una función. Son de **solo lectura**: el componente que las recibe no puede modificarlas. Por ejemplo, `TarjetaPerfil` recibe `nombre`, `carrera`, `escuela` y `grupo` desde `App`.

El **state** (estado) son datos que **le pertenecen al propio componente** y que **sí pueden cambiar** con el tiempo (por ejemplo, cuando el usuario hace clic o escribe). Cuando el estado cambia, React vuelve a dibujar el componente automáticamente. Por ejemplo, `ListaTareas` guarda en su estado el arreglo de tareas, y cada vez que agrego o elimino una, la pantalla se actualiza.

En resumen: **props = vienen del padre y no se modifican; state = es interno y sí se modifica.**

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
Cuando se renderiza una lista con `.map()`, React necesita saber **cuál elemento es cuál** para poder actualizar la pantalla de forma eficiente. La `key` es un identificador **único** que permite a React saber qué elemento se agregó, cuál se eliminó o cuál cambió, sin tener que volver a dibujar toda la lista.

Si no se usa una `key` (o se usa el índice del arreglo cuando la lista cambia), React puede confundir los elementos y producir errores, por ejemplo que un checkbox marcado aparezca en la tarea equivocada después de eliminar otra. Además, React muestra una advertencia en la consola. En mi proyecto uso `key={tarea.id}`, y el `id` se genera con `Date.now()`, así cada tarea tiene un identificador que no se repite.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
`useState` es un *hook* de React que le permite a un componente funcional **guardar un valor que puede cambiar** y que React "recuerda" entre cada renderizado. Devuelve dos cosas: el **valor actual** y una **función para cambiarlo**. Cada vez que llamo a esa función con un nuevo valor, React actualiza el estado y vuelve a mostrar el componente con el dato nuevo.

Ejemplos en mi aplicación:
```jsx
// En ListaTareas.jsx: guarda la lista de tareas
const [tareas, setTareas] = useState(tareasIniciales)

// Al agregar una tarea se crea un nuevo arreglo y la lista se actualiza en pantalla
setTareas([...tareas, tarea])
```
También lo uso para el texto que se escribe en el input (`nuevaTarea`), para el filtro seleccionado (`filtro`) y, en `TarjetaPerfil`, para mostrar u ocultar los detalles (`mostrarDetalles`).

### d) Enlace del repositorio de GitHub
https://github.com/AngelSixto/t3_act4_react.git

### e) Enlace del proyecto desplegado en GitHub Pages
https://angelsixto.github.io/t3_act4_react/
