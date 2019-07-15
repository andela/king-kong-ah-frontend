import { renderHook, act } from '@testing-library/react-hooks';
import useForm from '../useForm';
import {
  callback, rules, event, getEvent,
} from '<fixtures>/useForm';

describe('userForm hook', () => {
  it(' should render', () => {
    const { result } = renderHook(() => useForm(callback, rules));
    const { values, handleChange, handleSubmit } = result.current;

    expect(values.id.value).toBe('');
    expect(values.id.err).toBe(undefined);
    expect(values.username.value).toBe('');
    expect(values.username.err).toBe(undefined);
    expect(typeof handleChange).toBe('function');
    expect(typeof handleSubmit).toBe('function');
  });

  it('handleChange function should update value', () => {
    const { result } = renderHook(() => useForm(callback, rules));
    const { handleChange } = result.current;

    act(() => {
      handleChange(event);
    });

    const { values: { username } } = result.current;

    expect(username.value).toBe('EazyBee');
    expect(username.err).toBe(undefined);
  });

  it('username should have error when passed empty string for a required filed',
    () => {
      const { result } = renderHook(() => useForm(callback, rules));
      const { handleChange } = result.current;

      act(() => {
        handleChange(getEvent({ required: true, value: ' ' }));
      });

      const { values: { username } } = result.current;

      expect(username.value).toBe(' ');
      expect(username.err).toBe('The username field cannot be empty.');
    });

  it('username should have error when passed invalid data type', () => {
    const { result } = renderHook(() => useForm(callback, rules));
    const { handleChange } = result.current;

    act(() => {
      handleChange(getEvent({ required: true, value: '1234' }));
    });

    const { values: { username } } = result.current;

    expect(username.value).toBe('1234');
    expect(username.err)
      .toBe('The username field must contain only alphabetic characters.');
  });

  it('handleSubmit should submit and call calback function', () => {
    const { result } = renderHook(() => useForm(
      callback, { username: 'alpha' },
    ));

    const { handleSubmit } = result.current;

    let callbackResponse;
    act(() => {
      callbackResponse = handleSubmit({ preventDefault: () => '' });
    });

    expect(callbackResponse[0]).toBe('callback called');
  });

  it('handleSubmit should not submit nor call calback function', () => {
    const { result } = renderHook(() => useForm(callback, rules));
    const { handleSubmit } = result.current;

    let callbackResponse;
    act(() => {
      callbackResponse = handleSubmit({ preventDefault: () => '' });
    });

    const { values: { username } } = result.current;

    expect(callbackResponse).toBe(undefined);
    expect(username.value).toBe('');
    expect(username.err).toBe('The username field is required.');
  });
});
