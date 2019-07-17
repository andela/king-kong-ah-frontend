import { renderHook } from '@testing-library/react-hooks';
import useApiData from '../useApiData';

jest.mock('../useDataFromApi.js');


describe('userApiData hook', () => {
  it('should render', () => {
    const { result } = renderHook(() => useApiData('get', '/', {}));
    const { fetchedData, loading, error } = result.current;

    expect(loading).toBe(false);
    expect(fetchedData).toBe(undefined);
    expect(error).toBe(undefined);
  });
});
