// import logo from './logo.svg';
// import Register from "pages/Register/Register";

import { Flip, ToastContainer } from 'react-toastify';
import SharedLayout from 'components/Layout/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
// import Login from "pages/Login/Login";
// import Contacts from "pages/Contacts/Contacts";
// import NotFound from "pages/NotFound/NotFound";
// import ContactsDetails from "components/ContactsDetails/ContactsDetails";
import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import Tasks from "pages/Tasks/Tasks";
// import Weather from "pages/Weather/Weather";
// import Movies from "pages/Movies/Movies";

const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const TasksPage = lazy(() => import('pages/TasksPage/TasksPage'));
// const WeatherPage = lazy(() => import('pages/WeatherPage/WeatherPage'));
// const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const UserPage = lazy(() => import('pages/UserPage'));
// const ContactsDetails = lazy(() =>
//   import('./components/Contacts/ContactsDetails')
// );

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegisterPage />}
                  redirectTo="/user"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={<LoginPage />} redirectTo="/user" />
              }
            />
            <Route
              path="/user"
              element={
                <PrivateRoute component={<UserPage />} redirectTo="/login" />
                // isLoggedIn ? (
                //   <PrivateRoute component={<UserPage />} />
                // ) : (
                //   <RestrictedRoute component={<HomePage />} />
                // )
              }
            />
            <Route
              path="/Contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              }
            />
            <Route
              path="/Tasks"
              element={
                <PrivateRoute component={<TasksPage />} redirectTo="/login" />
              }
            />
            {/* <Route
              path="/weather"
              element={
                <PrivateRoute component={<WeatherPage />} redirectTo="/login" />
              }
            />
            <Route
              path="/movies"
              element={
                <PrivateRoute component={<MoviesPage />} redirectTo="/login" />
              }
            /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          {/* <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/contacts:contactId" element={<ContactsDetails />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route> */}
          {/* <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="sales" element={<Sales />} />
            <Route path="customers" element={<Customers />} />
          </Route> */}
        </Routes>
      </header>
      <ToastContainer transition={Flip} />
    </div>
  );
}

export default App;
