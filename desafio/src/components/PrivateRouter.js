import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";


//criando componete para privar uma rota de usuários não autorizados

export function PrivateRouter({ children, ...rest }) {

    const admin = useSelector(state => state.Admin) // Caso admin já tenha propriedades, admin.email existe

    return (<Route {...rest}

        render={({ location }) =>
            admin.email ? (children) : (<Redirect to={{ pathname: "/Login", state: { from: location } }}></Redirect>)
        }
    >

    </Route>)

}