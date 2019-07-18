import HomePage from '<pages>/Homepage';
import SignUpPage from '<pages>/authPages/signup';
import LoginPage from '<pages>/authPages/login';
import Protected from '<pages>/Protected';

export const UnauthenticatedRoutes = {
  default: [
    {
      exact: true,
      path: '/',
      component: HomePage,
    },
    {
      exact: true,
      path: '/signup',
      component: SignUpPage,
    },
    {
      exact: true,
      path: '/login',
      component: LoginPage,
    },
  ],
};

export const ProtectedRoutes = [
  {
    exact: false,
    path: '/protected',
    component: Protected,
  },
];
