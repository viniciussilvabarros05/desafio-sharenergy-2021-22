import fotoClient from "../assets/fotoClient.png"
import excluir from "../assets/excluir.png"
import editar from "../assets/editar.png"

import { ModelEdit } from "./ModelEdit"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteItem } from "../actions/actionList"
import swal from "sweetalert"


export function ClientCard(props) {
    const dispatch = useDispatch()
    const [listUsina, setListUsina] = useState() // Estado que mostra a lista de usinas quando true
    const [modelEdit, setEdit] = useState(false) // Estado que diz se o cliente sofrerá mudança, trazendo o model de edição
    const Percentage = useSelector(state => state.Potencia) 

/*Função que realiza chamada das listas de usina */
    function ExporListUsinas() {

        if (listUsina) {
            setListUsina(false)
        } else {
            setListUsina(true)
        }

    }
/*Função que realiza chamada para excluir cliente*/
    function Delete(i) {

        swal({
            title: `Quer realmente excluir ${props.item.nomeCliente}?`,
            icon: "warning",
            buttons: ["Cancelar", "Excluir"]
        }).then(res => {
            if (res) {
                dispatch(deleteItem(i))
                swal({
                    text: `${props.item.nomeCliente} excluído com sucesso`,
                    icon: "success"
                })
            }
        })
    }


/*A função PercentageClient recebe a array de usinas do cliente como parâmetro e retorna seu valor em Real */
    function PercentageCLient(a) {
        let formatValue = a.map((item, index) => {
            return (parseFloat(Percentage)) * 0.95 * (item.percentualDeParticipacao / 100)
        })

        return formatValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    }


    return (

        <>
            <div key={props.key} className="description">

                <div className="foto">
                    <img src={fotoClient} alt ={props.key}></img>
                </div>

                <ul>
                    <li><strong>{props.item.nomeCliente}</strong></li>
                    <li><strong>Numero: </strong>{props.item.numeroCliente}</li>
                    <li><strong>Percentual de lucro:</strong>{PercentageCLient(props.item.usinas)}</li>

                    <img alt="delete" className="delete-button" onClick={() => Delete(props.item.numeroCliente)} src={excluir} />

                    <div onClick={()=> setEdit(true)} className="edit-button">
                        <img alt="edit" src={editar} />
                    </div>

                </ul>

                <div className={listUsina ? "usinas-list visible-list-usina" : "usinas-list hidden-list-usina"}>
                    <div>
                        <p>Usinas</p>
                        <span onClick={ExporListUsinas}>🔻</span>
                    </div>

                    {props.item.usinas.map(usina => {
                        return (
                            <>
                                <div className="description-usinas">
                                    <div>
                                        <p>UsinaID: {usina.usinaId}</p>
                                        <p><strong>Percentual: </strong>{usina.percentualDeParticipacao}%</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            {modelEdit ? <ModelEdit client={props.item} setEdit={setEdit}></ModelEdit> : ""}
        </>

    )
}