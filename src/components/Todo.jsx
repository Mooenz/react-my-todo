import React from 'react';

const Todo = ({ item, eliminarTodo, editarTodo }) => {
  console.log(item);

  const { nombre, descripcion, estado, prioridad, id } = item;
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-start mt-1">
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            {nombre}{' '}
            <span
              className={`${
                estado ? 'bg-success' : 'bg-warning text-dark'
              } badge rounded-pill`}
            >
              {estado ? 'Finalizado' : 'Pendiente'}
            </span>
          </div>
          <p>{descripcion}</p>
          <div>
            <button
              className="btn btn-danger fw-bold me-2"
              onClick={() => eliminarTodo(id)}
            >
              Eliminar
            </button>
            <button
              className={`btn fw-bold ${
                estado ? 'bg-success' : 'btn-secondary'
              }`}
              onClick={() => editarTodo(id)}
            >
              {estado ? 'Agregar de nuevo' : 'Check'}
            </button>
          </div>
        </div>
        <span className="badge bg-primary rounded-pill">
          {prioridad && 'Prioridad'}
        </span>
      </li>
    </>
  );
};

export default Todo;
