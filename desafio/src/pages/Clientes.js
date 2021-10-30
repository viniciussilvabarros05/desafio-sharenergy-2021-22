
import "../styles/Clientes.scss"



import { ClientCard } from "../components/ClientCard"
import { ModelRegister } from "../components/Model"

import { useState } from "react"
import { useSelector } from "react-redux"

export function Clients() {

    const [model, setModel] = useState(false)

    let Clients = useSelector(state => state.Clients)


    return (
            <>

                <div className="table-client">
                    <div className="header">
                        <span onClick={() => setModel(true)} className="crud">+</span>
                        <div>
                            <input type="text" placeholder="Pesquisar cliente"></input>
                            <span>🔍</span>
                        </div>
                    </div>


                    <div className="list-client">
                        {Clients.map((item, index) => {
                            return (
                                <ClientCard setModel={setModel} item={item} index={index}></ClientCard>
                            )
                        })}
                    </div>
                </div>

                {model ?

                    <div className="model-crud">


                        <ModelRegister setModel={setModel}></ModelRegister>


                    </div>

                    : ""}

            </>
        )
    }