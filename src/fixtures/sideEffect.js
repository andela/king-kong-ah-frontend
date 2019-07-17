
export const sideEffect = {
  fetchData: null,
  loading: false,
  error: null,
  setFetchedData: (value) => { sideEffect.fetchData = value; },
  setLoading: (value) => { sideEffect.loading = value; },
  setError: (value) => { sideEffect.error = value; },
  getFetchedData: () => sideEffect.fetchData,
};

export default sideEffect;
