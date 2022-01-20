import { useState } from 'react';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ agregarTodo }) => {
  const initialState = {
    nombre: '',
    descripcion: '',
    estado: 'pendiente',
    prioridad: false,
  };

  const [todo, setTodo] = useState(initialState);

  const { nombre, descripcion, estado, prioridad } = todo;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nombre.trim()) {
      event.target[0].focus();

      return Swal.fire({
        title: 'Error!',
        text: 'El nombre no debe ir el blanco',
        icon: 'error',
      });
    }

    if (!descripcion.trim()) {
      event.target[1].focus();

      return Swal.fire({
        title: 'Error!',
        text: 'La descripción no debe ir el blanco',
        icon: 'error',
      });
    }

    agregarTodo({
      nombre: nombre,
      descripcion: descripcion,
      estado: estado === 'pendiente' ? false : true,
      prioridad: prioridad,
      id: uuidv4(),
    });

    setTodo(initialState);

    return Swal.fire({
      title: 'Tarea Agregada',
      icon: 'success',
    });
  };

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setTodo((old) => ({
      ...old,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <>
      <h3>Agregar ToDo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          className="form-control mb-2"
          placeholder="Ingrese nombre del todo"
          value={nombre}
          onChange={handleChange}
        />
        <textarea
          name="descripcion"
          className="form-control mb-2"
          placeholder="Ingrese descripción"
          value={descripcion}
          onChange={handleChange}
          cols={5}
          rows={5}
        />
        <select
          name="estado"
          className="form-control mb-2"
          value={estado}
          onChange={handleChange}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="flexCheckDefault"
            name="prioridad"
            checked={prioridad}
            onChange={handleChange}
          />
          <label htmlFor="flexCheckDefault" className="form-check-label">
            Prioridad
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Formulario;
