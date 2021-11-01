
import "../styles/Clientes.scss"

import { ClientCard } from "../components/ClientCard"
import { ModelRegister } from "../components/Model"

import { useState } from "react"
import { useSelector } from "react-redux"
import lupa from "../assets/lupa.png"

export function Clients() {

    const Clients = useSelector(state => state.Clients)

    const [model, setModel] = useState(false)
    const [busca, setBusca] = useState('')
    const ClientsFilter = Clients.filter(item => item.nomeCliente.toLowerCase().includes(busca.toLowerCase()))




    return (
        <>

            <div className="table-client">
                <div className="header">
                    <span onClick={() => setModel(true)} className="crud">+</span>
                    <div>
                        <input onChange={(event) => setBusca(event.target.value)} type="text" placeholder="Pesquisar cliente"></input>
                        <span onClick={() => setBusca(busca)}><img width="25px" src={lupa}></img></span>
                    </div>
                </div>


                <div className="list-client">
                    {ClientsFilter.map((item, index) => {

                        return (
                            <ClientCard setModel={setModel} item={item} key={index}></ClientCard>
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