import { useEffect, useState } from 'react';
import Formulario from './Formulario';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });

  const agregarTodo = (todo) => {
    setTodos((old) => [...old, todo]);
  };

  const eliminarTodo = (id) => {
    setTodos((old) => old.filter((item) => item.id !== id));
  };

  const editarTodo = (id) => {
    const editTodo = todos.map((item) =>
      item.id === id ? { ...item, estado: !item.estado } : item
    );
    setTodos(editTodo);
  };

  return (
    <>
      <Formulario agregarTodo={agregarTodo} />

      <h2 className="mt-4">Lista ToDos</h2>
      <ul className="list-group list-group-numbered">
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            eliminarTodo={eliminarTodo}
            editarTodo={editarTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
