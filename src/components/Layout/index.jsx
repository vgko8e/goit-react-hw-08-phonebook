import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Outlet, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLogin, getUserName } from 'redux/auth/authSelector';
import { logOut } from 'redux/auth/authOperations';
import Avatar from 'react-avatar';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

function LayOut() {
  const isLogin = useSelector(getIsLogin);
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const handlerLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          minHeight: '100vh',
        }}
      >
        <AppBar sx={{ width: '100', top: 0, left: 0 }}>
          <Toolbar
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            {isLogin && (
              <>
                <Avatar name={name} size={80} round={true}></Avatar>
                <Typography
                  variant="h4"
                  gutterBottom
                  component="p"
                  sx={{ m: 2 }}
                >
                  {name}
                </Typography>
                <img
                  src="http://img.combats.com/i/smile/horse.gif"
                  alt="s"
                  width={80}
                />

                <Button color="inherit" onClick={handlerLogout}>
                  <LogoutIcon sx={{ fontSize: 40, color: 'white' }} />
                </Button>
                <NavLink to={'/goit-react-hw-08-phonebook/contacts'}>
                  <ImportContactsRoundedIcon
                    sx={{ fontSize: 40, color: 'white' }}
                  />
                </NavLink>
              </>
            )}
            <NavLink to={'/goit-react-hw-08-phonebook/'}>
              <HomeRoundedIcon sx={{ fontSize: 40, color: 'white' }} />
            </NavLink>

            {!isLogin && (
              <>
                <NavLink to={'/goit-react-hw-08-phonebook/register'}>
                  <AppRegistrationIcon sx={{ fontSize: 40, color: 'white' }} />
                </NavLink>
                <NavLink to={'/goit-react-hw-08-phonebook/login'}>
                  <LoginIcon sx={{ fontSize: 40, color: 'white' }} />
                </NavLink>
              </>
            )}
          </Toolbar>
        </AppBar>
        <Box sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export { LayOut };
