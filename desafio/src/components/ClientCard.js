import fotoClient from "../assets/fotoClient.png"
import { useState } from "react"

export function ClientCard(props) {
    const [listUsina, setListUsina] = useState()

    return (

        <>
            <div key={props.index} className="description">

                <div className="foto">
                    <img src={fotoClient}></img>
                </div>

                <ul>
                    <li><strong>{props.item.nomeCliente}</strong></li>
                    <li><strong>Numero:</strong>{props.item.numeroCliente}</li>

                </ul>
                <div className= {listUsina?"usinas-list visible-list-usina":"usinas-list hidden-list-usina"}>
                    <div>
                        <p>Usinas</p>

                        <span onClick={() => {
                            if (listUsina) {
                                setListUsina(false)
                            } else {
                                setListUsina(true)

                            }

                        }}>🔻</span>

                    </div>

                    {props.item.usinas.map(usina => {
                        return (
                            <>
                                <div className="description-usinas">
                                    <div>
                                        <p>UsinaID: {usina.usinaId}</p>
                                        <p><strong>Percentual:</strong>{usina.percentualDeParticipacao}%</p>
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