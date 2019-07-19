import HomePage from '<homepage>/HomePage';
import Protected from '<pages>/Protected';

export const UnauthenticatedRoutes = {
  default: [
    {
      exact: true,
      path: '/',
      component: HomePage,
    },
  ],
};

export const ProtectedRoutes = [
  {
    exact: true,
    path: '/protected',
    component: Protected,
  },
];
