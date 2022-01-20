import { useState } from 'react';

export const useFormulario = (initialState = {}) => {
<<<<<<< HEAD
  const [inputs, serInputs] = useState(initialState);
=======
  const [inputs, serInputs] = useState;
>>>>>>> f5061d249a41649ab6496a8e1adf279ef6fafb25

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
