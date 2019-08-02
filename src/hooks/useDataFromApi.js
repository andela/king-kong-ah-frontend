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
    setFetchedData({});

    let {
      data: apiData, error: apiError,
    } = await requestApi(method, path, data);

    if (apiData) {
      setFetchedData(apiData);
    }
    if (apiError) {
      setError(apiError);
      apiData = null;
    }

    setLoading(false);
  };

  request();
}, [path, data]);


export default useDataFromApi;
