import { useEffect } from 'react';
import requestApi from '<helpers>/requestApi';

const useDataFromApi = ({
  setLoading,
  setFetchedData,
  setError,
  method,
  path,
  data,
}) => useEffect(() => {
  const request = async () => {
    setLoading(true);

    const {
      data: apiData, error: apiError,
    } = await requestApi(method, path, data);

    apiData && setFetchedData(apiData);
    apiError && setError(apiError);

    setLoading(false);
  };

  request();
}, [path, data]);


export default useDataFromApi;
