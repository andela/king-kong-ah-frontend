import { useState } from 'react';
import useDataFromApi from './useDataFromApi';

const useApiData = (method, path, data) => {
  const [fetchedData, setFetchedData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useDataFromApi({
    setLoading,
    setFetchedData,
    setError,
    method,
    path,
    data,
  });


  return { fetchedData, loading, error };
};

export default useApiData;
