
import "../styles/Model.scss"
import fotoClient from "../assets/fotoClient.png"
import { useSelector } from "react-redux"
import assert from "../assets/check-mark.png"
import { useEffect } from "react"

export function Model(props) {
    const Clients = useSelector(state => state.Clients)


    function Register(event) {

        event.preventDefault()

        const nome = document.getElementById("nome").value
        const numero = document.getElementById("numero").value
        const usinaID = document.getElementById("usinaID").value
        const percentual = document.getElementById("percentual").value
        const contentForm = document.getElementById("content-form")
        const alerta = document.querySelector(".sucess")
        let newClient = {}

        if (!(nome, numero, usinaID, percentual)) {
            return alert("Dados incorretos")
        } else {
             newClient = {
                numeroCliente: numero,
                nomeCliente: nome,
                usinas: [{
                    usinaId: usinaID,
                    percentualDeParticipacao: percentual
                }]
            }
            Clients.push(newClient)
        }

        
        alerta.classList.remove("sucess-disable")
        contentForm.style.visibility = "hidden"

        setTimeout(() => {
            props.setModel(false)
            alerta.classList.add("sucess-disable")
        }, 600)
    }

    return (
        <>
            <div id = "content-form">
                <div className="foto">
                    <img src={fotoClient}></img>
                </div>
                <form>
                    <input type="text" id="nome" placeholder="Nome do cliente"></input>
                    <input type='number' id="numero" min="0" placeholder="Número do cliente"></input>
                    <input type="number" id="usinaID" placeholder="Identificação da usina"></input>
                    <input type="number" id="percentual" min="0" placeholder="Percentual de participação"></input>

                    <div className="buttons">
                        <button onClick={Register}>Registrar</button>
                        <a href="#" onClick = {()=>props.setModel(false)}>Cancelar</a>
                    </div>

                </form>
            </div>

            <div className="sucess sucess-disable" >
                <img src={assert}></img>
            </div>
        </>
    )
}