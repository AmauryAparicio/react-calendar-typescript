import { ChangeEvent, useState } from "react";

const useForm = <T>(
  initialState: T
): [T, ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void, (newFormState: T) => void] => {
  const [values, setValues] = useState(initialState);

  const reset = (newFormState?: T) => {
    setValues(newFormState ? newFormState : initialState);
  }

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};

export default useForm;
