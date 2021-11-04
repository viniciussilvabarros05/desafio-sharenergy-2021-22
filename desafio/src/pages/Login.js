import UserFoto from "../assets/fotoClient.png"
import "../styles/Login.scss"
import { useDispatch, useSelector } from "react-redux"
import swal from "sweetalert"
import { useHistory } from "react-router"
import { useEffect } from "react"
import { menuDisable } from "../actions/actionList"

export function Login() {
    const dispatch = useDispatch()
    const admin = useSelector(state => state.Admin) // Pega o estado de adm, necessário para entrar na página de clientes
    const history = useHistory()


    /*Esta função recebe os valores dos campos de entrada e setam um usuário 
    
    se o usuário não for igual ao que foi criado no reducer UserAdmin, retornará um alerta do sweetalert*/

    function signIn() {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        const user = {
            email,
            password
        }

        dispatch({ type: 'LOGIN', payload: user })
    }


    /*o useEffect está olhando as mudanças de estado do admin, caso ele exista,
     será redirecionado para a pagina de clientes, caso o contrário, emitirá o alerta*/
    useEffect(() => {
        if (!admin.email) {
            dispatch(menuDisable())
            swal({
                title: "Usuário sem permissão",
                icon: "warning",
                timer: 1500
            })
        } else {
            history.push("/Clients")
        }
    }, [admin])


    return (
        <div className="content-login">
            <div className="Login-window">
                <img src={UserFoto} alt="User-photo"></img>

                <div>
                    <input id="email" type="email" placeholder="Email"></input>
                    <input id="password" type="text" placeholder="Senha"></input>
                    <button onClick={signIn}>LOGIN</button>
                </div>

                <div className="information">
                    <p>Email: admin@email.com</p>
                    <p>Senha: admin</p>
                </div>
            </div>
        </div>
    )
}