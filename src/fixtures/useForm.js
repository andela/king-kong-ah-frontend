export const rules = {
  username: 'required|alpha',
  id: 'numeric',
};

export const event = {
  target: {
    value: 'EazyBee',
    name: 'username',
  },
};

export const getEvent = (newValues) => {
  return {
    target: {
      ...event.target,
      ...newValues,
    },
  };
};

export const callback = (values) => {
  return ['callback called', values];
};
