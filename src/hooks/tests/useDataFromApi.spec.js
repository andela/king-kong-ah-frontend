import { renderHook } from '@testing-library/react-hooks';
import useDataFromApi from '../useDataFromApi';
import sideEffect from '<fixtures>/sideEffect';


const { setLoading, setFetchedData, setError } = sideEffect;

let params = {
  setFetchedData,
  setLoading,
  setError,
  method: 'get',
  path: '/',
  data: {},
};


describe('userDataFormAPI hook', () => {
  it('should render', () => {
    const { error, rerender } = renderHook(() => useDataFromApi(params));
    params = { ...params, path: '/error' };

    rerender();

    expect(sideEffect.getLoading()).toBe(true);
    expect(sideEffect.getFetchedData()).toBe(null);
    expect(error).toBe(undefined);
  });
});
