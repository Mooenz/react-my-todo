import { useState } from 'react';

const Formulario = () => {
  const initialState = {
    nombre: '',
    descripcion: '',
    estado: 'pendiente',
    prioridad: false,
  };

  const [todo, setTodo] = useState(initialState);
  const { nombre, descripcion, estado, prioridad } = todo;
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
  };
  return (
    <>
      <h3>Agregar TODO</h3>
      <form>
        <input
          type="text"
          name="nombre"
          className="form-control mb-2"
          placeholder="Ingrese nombre del todo"
          value={nombre}
          onChange={handleChange}
        />
        <textarea
          name="Descripcion"
          className="form-control mb-2"
          placeholder="Ingrese descripción"
          value={descripcion}
          onChange={handleChange}
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
            Default checkbox
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
