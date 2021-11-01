
import { NavLink } from "react-router-dom"


import { useDispatch, useSelector } from "react-redux"

import { menuActived, menuDisable } from "../actions/actionList"

import "../styles/MenuLateral.scss"
import exit from "../assets/sair.png"

export function MenuLateral() {

    function handleFocusMenu(event) {

        const target = event.target.getAttribute("class")
        if (target === "content-menuLateral menuExposed") {
            dispatch(menuDisable())
        } else {
            dispatch(menuActived())
        }

        if (target === "menu-hamburguer" || target === "line") {
            dispatch(menuDisable())
        }

    }

    const dispatch = useDispatch()

    const menuLateral = useSelector(state => { return state.menuLateral })


    return (
        <div onClick={handleFocusMenu} className={`content-menuLateral ${menuLateral ? "menuExposed" : "menuhidden content-hidden"}`}>

            <div className={`menu-lateral ${menuLateral ? "menuExposed" : "menuhidden"}`}>
                <div className="menu-hamburguer">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <nav className="menu-links">
                    <NavLink activeClassName="ActivedMenu" to="/produção-do-dia">PRODUÇÃO DO DIA</NavLink>


                    <NavLink activeClassName="ActivedMenu"

                        to="/Clients">CLIENTES</NavLink>

                    <NavLink activeClassName="ActivedMenu"

                        to="/Login">LOGIN</NavLink>

                    <NavLink
                        to="/" onClick={() => dispatch({ type: "LOGOUT" })}><img width = "25px" src = {exit}/>LOGOUT
                    </NavLink>
                </nav>



            </div>

        </div>
    )
}