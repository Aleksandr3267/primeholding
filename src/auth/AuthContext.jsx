import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser, setUser } from '../store/userSlice';
import jwtService from '../jwtService';
import PrimeSplashScreen from "../components/UI/PrimeSplashScreen/index.jsx";

const AuthContext = React.createContext();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  const [waitAuthCheck, setWaitAuthCheck] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("AuthProvider")
    jwtService.on('onAutoLogin', () => {
      console.log("onAutoLogin")

      /**
       * Sign in and retrieve user data with stored token
       */
      jwtService
          .signInWithToken()
          .then((data) => {
            success({ ...data.user, ...data.layout }, 'Signed in with JWT');
          })
          .catch((error) => {
            pass(error.message);
          });
    });

    jwtService.on('onLogin', (user) => {
      console.log("onLogin")
      // in user param we also have layout settings object
      success(user, 'Signed in');
    });

    jwtService.on('onLogout', () => {
      console.log("onLogout")
      pass('Signed out');

      dispatch(logoutUser());
    });

    jwtService.on('onAutoLogout', (message) => {
      console.log("onAutoLogout")
      pass(message);

      dispatch(logoutUser());
    });

    jwtService.on('onNoAccessToken', () => {
        console.log("onNoAccessToken")
      pass();
    });

    jwtService.init();

    function success(user, message) {
      if (message) {
        console.log(message)
      }

      // Set user and (layout: current && default) settings
      Promise.all([
        dispatch(setUser(user)),
        // You can receive data in here before app initialization
      ]).then((values) => {
        setWaitAuthCheck(false);
        setIsAuthenticated(true);
      });
    }

    function pass(message) {
      if (message) {
        console.log(message)
      }

      setWaitAuthCheck(false);
      setIsAuthenticated(false);
    }
  }, [dispatch]);

  return waitAuthCheck ? (
        <PrimeSplashScreen />
  ) : (
      <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>
  );
}


export default AuthProvider;
