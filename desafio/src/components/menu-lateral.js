
import { NavLink } from "react-router-dom"


import { useDispatch, useSelector } from "react-redux"

import { menuActived, menuDisable } from "../actions/actionList"

import "../styles/MenuLateral.scss"
import exit from "../assets/sair.png"
import sweal from "sweetalert"
import { useEffect } from "react"
export function MenuLateral() {

    const dispatch = useDispatch()
    const menuLateral = useSelector(state => { return state.menuLateral })
    const admin = useSelector(state => state.Admin)

    /*Neste trecho, as condições fazem comparações com os nomes das classes dos elementos
    
    Somente algumas áreas de alguns elementos, podem fazer o menu lateral sumir, quando clicado*/
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

    function Logout() {

        if (admin.email) {
            dispatch({ type: "LOGOUT" })

        } else {
            return
        }

    }

    useEffect(() => {
        if (!admin.email) {

            sweal({
                title: "Usuário Deslogado",
                icon: "warning",
                timer: 1000
            })

        }

    }, [admin])

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


                    {/*Aqui emitirá para o estado de admin que a conta será deslogada */}
                    <a
                        to="" onClick={Logout}><img width="25px" src={exit} alt="exit" />LOGOUT
                    </a>
                </nav>



            </div>

        </div>
    )
}