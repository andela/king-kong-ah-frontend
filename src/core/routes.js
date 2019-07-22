import HomePage from '<homepage>/HomePage';
import SignUpPage from '<pages>/AuthPages/Signup';
import LoginPage from '<pages>/AuthPages/Login';
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
  {
    exact: true,
    path: '/userpage',
    component: UserPage,
  },
];
