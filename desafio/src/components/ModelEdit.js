
import "../styles/Model.scss"
import fotoClient from "../assets/fotoClient.png"
import { useDispatch, useSelector } from "react-redux"
import { updateItem } from "../actions/actionList"
import assert from "../assets/check-mark.png"
import swal from "sweetalert"

export function ModelEdit(props) {
    const client = props.client
    const Clients = useSelector(state => state.Clients)
    const dispatch = useDispatch()
    
    
    let updateClient = {}

    function Update(event) {

        event.preventDefault()


        const nome = document.getElementById("nome").value
        const numero = document.getElementById("numero").value
        const usinaID = document.getElementById("usinaID").value
        const percentual = document.getElementById("percentual").value
        const contentForm = document.getElementById("content-form")
        const alerta = document.querySelector(".sucess")

        let findExistsClient = Clients.filter(item => parseInt(item.numeroCliente) === parseInt(numero))


        if (findExistsClient.length > 0) {
          return swal({
              title: `O Cliente com o numero ${numero} já existe`,
              icon:"warning"
          }) 
        }

        updateClient = {
            numeroCliente: parseInt(numero),
            nomeCliente: nome,
            usinas: [{
                usinaId: parseInt(usinaID),
                percentualDeParticipacao: parseInt(percentual)
            }]
        }

        
        dispatch(updateItem({ update: updateClient, client: client.numeroCliente }))
        
        alerta.classList.remove("sucess-disable")
        contentForm.style.visibility = "hidden"

        setTimeout(() => {
            props.setEdit(false)
            alerta.classList.add("sucess-disable")

        }, 600)

    }

    return (
        <div className="model-crud">
            <div id="content-form">
                <div className="foto">
                    <img src={fotoClient}></img>
                </div>
                <form autoComplete="on">
                    <input type="text" id="nome" placeholder={client.nomeCliente}></input>
                    <input type='number' id="numero" min="0" placeholder={"Numero: " + client.numeroCliente}></input>
                    <input type="number" id="usinaID" placeholder={"UsinaId: " + client.usinas[0].usinaId}></input>
                    <input type="number" id="percentual" min="0" placeholder={"Percentual: " + client.usinas[0].percentualDeParticipacao + "%"}></input>

                    <div className="buttons">
                        <button onClick={Update}>Atualizar</button>
                        <a onClick={() => props.setEdit(false)}>Cancelar</a>
                    </div>

                </form>
            </div>

            <div className="sucess sucess-disable" >
                <img src={assert}></img>
            </div>


        </div>
    )
}