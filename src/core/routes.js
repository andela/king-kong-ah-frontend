import HomePage from '<homepage>/HomePage';
import SignUpPage from '<pages>/AuthPages/Signup';
import LoginPage from '<pages>/AuthPages/Login';
import PasswordEmailVerifier from '<pages>/AuthPages/PasswordEmailVerifier';
import PasswordReset from '<pages>/AuthPages/PasswordReset';
import Protected from '<pages>/Protected';
import UserPage from '<pages>/UserPage/UserPage';

export const UnauthenticatedRoutes = {
  default: [
    {
      exact: true,
      path: '/',
      component: HomePage,
    },
    {
      exact: true,
      path: '/Adventure',
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
    {
      exact: true,
      path: '/password',
      component: PasswordEmailVerifier,
    },
    {
      exact: true,
      path: '/reset-password',
      component: PasswordReset,
    },
  ],
};

export const ProtectedRoutes = [
  {
    exact: false,
    path: '/protected',
    component: Protected,
  },
  {
    exact: true,
    path: '/dashboard',
    component: UserPage,
  },
];
