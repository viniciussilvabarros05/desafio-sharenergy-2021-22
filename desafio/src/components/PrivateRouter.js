import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

export function PrivateRouter({ children, ...rest }) {

    const admin = useSelector(state => state.Admin)
  
    return (<Route {...rest}

        render={ ({ location }) =>
            admin.email ? (children) :
                (<Redirect to={{
                    pathname: "/Login",
                    state: { from: location }
                }}></Redirect>)
        }
    >

    </Route>)

}