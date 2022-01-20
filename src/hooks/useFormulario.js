import { useState } from 'react';

export const useFormulario = (initialState = {}) => {
  const [inputs, serInputs] = useState(initialState);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    serInputs((old) => ({
      ...old,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const reset = () => {
    serInputs(initialState);
  };

  return [inputs, handleChange, reset];
};
