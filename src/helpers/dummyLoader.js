const loadData = async (millisecond = 3000) => {
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  const value = await wait(millisecond).then(() => 'loaded');
  return value;
};

export default loadData;
