import fotoClient from "../assets/fotoClient.png"
import excluir from "../assets/excluir.png"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteItem } from "../actions/actionList"
export function ClientCard(props) {

    const dispatch = useDispatch()
    const [listUsina, setListUsina] = useState()
    
    function ExporListUsinas() {
        
            if (listUsina) {
                setListUsina(false)
            } else {
                setListUsina(true)
            }
        
    }

    function Delete(i) {
        dispatch(deleteItem(i))
    }

    return (

        <>
            <div key={props.index} className="description">

                <div className="foto">
                    <img src={fotoClient}></img>
                </div>

                <ul>
                    <li><strong>{props.item.nomeCliente}</strong></li>
                    <img alt = "delete" className = "delete-button" onClick={() => Delete(props.item.numeroCliente)} src={excluir} />
                    <li><strong>Numero: </strong>{props.item.numeroCliente}</li>
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
        </>

    )
}