import UserFoto from "../assets/fotoClient.png"
import "../styles/Login.scss"
import { useDispatch, useSelector } from "react-redux"
import swal from "sweetalert"
import { useHistory } from "react-router"
import { useEffect } from "react"

export function Login() {
    const dispatch = useDispatch()
    const admin = useSelector(state => state.Admin)
    const history = useHistory()

    function signIn() {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value


        const user = {
            email,
            password
        }

        dispatch({ type: 'LOGIN', payload: user })


    }

    useEffect(() => {
        if (!admin.email) {
            swal({
                title: "Usuário sem permissão",
                icon: "warning"
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
                    <button onClick={signIn}>Signin</button>
                </div>

                <div className="information">
                    <p>Email: admin@email.com</p>
                    <p>Senha: admin</p>
                </div>
            </div>
        </div>
    )
}