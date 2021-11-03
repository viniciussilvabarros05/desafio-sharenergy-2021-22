
import "../styles/Model.scss"
import fotoClient from "../assets/fotoClient.png"
import { useDispatch, useSelector } from "react-redux"
import assert from "../assets/check-mark.png"
import swal from "sweetalert"

export function ModelRegister(props) {
    const Clients = useSelector(state => state.Clients)
    const dispatch = useDispatch()

    function Register(event) {

        event.preventDefault()

        const nome = document.getElementById("nome").value
        const numero = document.getElementById("numero").value
        const usinaID = document.getElementById("usinaID").value
        const percentual = document.getElementById("percentual").value
        const contentForm = document.getElementById("content-form")
        const alerta = document.querySelector(".sucess")

        let newClient = {}

        // Neste trecho o findExistsClient traz a verificação se o cliente já está registrado
        let findExistsClient = Clients.filter(item => parseInt(item.numeroCliente) == parseInt(numero)) 


        // Se estiver, ou seja, se algum item retornar na array, o cliente existe e emitirá o alerta
        if (findExistsClient.length > 0) {
            return swal({
                title: `O Cliente com o numero ${numero} já existe`,
                icon:"warning"
            }) 
        }


        // Se algum desses dados não existir, emitirá um alerta

        if (!(nome, numero, usinaID, percentual)) {

            return alert("Dados incorretos")
        }

        newClient = {
            numeroCliente: parseInt(numero),
            nomeCliente: nome,
            usinas: [{
                usinaId: usinaID,
                percentualDeParticipacao: parseInt(percentual)
            }]
        }

        dispatch({ type: "ADD", payload: newClient })


        //Alerta de que o cliente foi registrado com sucesso
        
        alerta.classList.remove("sucess-disable")
        contentForm.style.visibility = "hidden"

        setTimeout(() => {
            props.setModel(false)
            alerta.classList.add("sucess-disable")
        }, 600)

    }

    return (
        <>
            <div id="content-form">
                <div className="foto">
                    <img alt = "img" src={fotoClient}></img>
                </div>
                <form autoComplete="on">
                    <input type="text" id="nome" placeholder="Nome do cliente"></input>
                    <input type='number' id="numero" min="0" placeholder="Número do cliente"></input>
                    <input type="number" id="usinaID" placeholder="Identificação da usina"></input>
                    <input type="number" id="percentual" min="0" placeholder="Percentual de participação"></input>

                    <div className="buttons">
                        <button onClick={Register}>Registrar</button>
                        <a onClick={() => props.setModel(false)}>Cancelar</a>
                    </div>

                </form>
            </div>

            <div className="sucess sucess-disable" >
                <img alt = "assert" src={assert}></img>
            </div>
        </>
    )
}