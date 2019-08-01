import formHandler from '../formHandler';

jest.mock('<helpers>/requestApi');

const setup = path => formHandler(
  { fakeValue: 'fakeValue' },
  { push: () => true },
  {
    method: 'patch',
    path,
    redirectTo: '/login',
  },
);

describe('formHandler', () => {
  it('should run successfully and return true', async () => {
    const res = await setup('auth/');

    expect(res).toBe('fakedata');
  });

  it('should return false for bad request', async () => {
    const res = await setup('error400');

    expect(res).toBe(false);
  });

  it('should return false for conflict request', async () => {
    const res = await setup('error409');

    expect(res).toBe(false);
  });

  it('should return a false for invalid url', async () => {
    const res = await setup('reject');

    expect(res).toBe(false);
  });
});
