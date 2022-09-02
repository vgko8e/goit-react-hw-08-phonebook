import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { ContactsView } from 'views/ContactsView/ContactsView';
import LoginView from 'views/LoginView/LoginView';
import { RegistrationView } from 'views/RegistrationView/RegistrationView';
import { LayOut } from 'components/Layout';
import { getStatusFetch, getToken } from 'redux/auth/authSelectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Box } from '@mui/material';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import HomeView from 'views/HomeView/HomeView';
import { Filter } from 'components/Filter';
import { ContactForm } from 'components/ContactForm';
import { ThreeDots } from 'react-loader-spinner';
import { Container } from 'components/Container';

const App = () => {
  const dispatch = useDispatch();
  const accountToken = useSelector(getToken);
  const isFetching = useSelector(getStatusFetch);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch, accountToken]);

  return (
    <>
      {isFetching ? (
        <ThreeDots
          height="200"
          width="400"
          radius="20"
          color="blue"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            margin: '500px auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <Box
          sx={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            gap: '45px',
            marginTop: '100px',
            margin: '0 auto',
          }}
        >
          <Routes>
            <Route path="/goit-react-hw-08-phonebook/" element={<LayOut />}>
              <Route index element={<HomeView />} />
              <Route
                path="register"
                element={
                  <PublicRoute>
                    <RegistrationView />
                  </PublicRoute>
                }
              ></Route>
              <Route
                path="login"
                element={
                  <PublicRoute>
                    <LoginView />
                  </PublicRoute>
                }
              ></Route>
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <ContactsView />
                  </PrivateRoute>
                }
              >
                <Route
                  path="add"
                  element={
                    <Container title="Add contact">
                      <ContactForm />
                    </Container>
                  }
                ></Route>
                <Route path="search" element={<Filter />}></Route>
              </Route>
            </Route>
            <Route path="*" element={<HomeView />}></Route>
          </Routes>
          <ToastContainer autoClose={2000} theme="colored" />
        </Box>
      )}
    </>
  );
};

export { App };
