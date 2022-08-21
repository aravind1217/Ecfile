import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { UserAuth } from './AuthContext';





















    



  const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { user } = UserAuth();

    return (
      <Route
        {...rest}
        render={(props) => {
          if (user) {
            return <Component {...props} />;
          } else {
            return (
              <>
                <Redirect
                  to={{
                    pathname: "/login",
                    state: {
                      from: props.location,
                    },
                  }}
                />
              </>
            );
          }
        }}
      />
    );
  };



export default ProtectedRoute

