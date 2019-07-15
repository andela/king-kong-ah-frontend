import { useState } from 'react';
import Validator from 'validatorjs';

const useForm = (callback, rules) => {
  const state = {};

  Object.keys(rules).forEach((key) => { state[key] = { value: '' }; });

  const [values, setValues] = useState(state);

  const validateOnSubmit = () => {
    const data = {};
    Object.keys(values).forEach((input) => {
      data[input] = values[input].value;
    });

    const validation = new Validator(data, rules);

    if (validation.fails()) {
      const newState = { ...values };
      Object.keys(rules).forEach((key) => {
        const errorMessage = validation.errors.has(key)
        && validation.errors.first(key);

        if (errorMessage) {
          newState[key] = {
            value: data[key],
            err: errorMessage,
          };
        }
      });
      setValues({ ...newState });
    }
    return validation.passes();
  };

  const errorHandler = (name, value, message) => {
    setValues({
      ...values,
      [name]: {
        value,
        err: message,
      },
    });

    return false;
  };

  const validateOnChange = (event) => {
    const {
      target: {
        required, value, name,
      },
    } = event;

    if (required && value.trim() === '') {
      return errorHandler(name, value, `The ${name} field cannot be empty.`);
    }

    const validation = new Validator(
      { [name]: value },
      { [name]: rules[name] },
    );

    if (validation.fails()) {
      return errorHandler(name, value, validation.errors.first(name));
    }

    return true;
  };

  const handleChange = (event) => {
    if (validateOnChange(event)) {
      setValues({
        ...values,
        [event.target.name]: { value: event.target.value },
      });
    }
  };

  const sanitizeData = () => {
    const data = {};
    Object.keys(values).forEach((key) => {
      data[key] = values[key].value.trim();
    });
    return data;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateOnSubmit()) {
      const data = sanitizeData();
      return callback(data);
    }
  };

  return { values, handleChange, handleSubmit };
};

export default useForm;
