
import "../styles/Clientes.scss"
import editar from "../assets/editar.png"


import { ClientCard } from "../components/ClientCard"
import { Model } from "../components/Model"
import { useState } from "react"
import { useSelector } from "react-redux"

export function Clients() {

    const [model, setModel] = useState(false)
    const Clients = useSelector(state => state.Clients)
    

  
    return (
        <>

            <div className="table-client">
                <div className="header">
                    <span onClick = {()=>setModel(true)}className="crud">+</span>
                    <div>
                        <input type="text" placeholder="Pesquisar cliente"></input>
                        <span>🔍</span>
                    </div>
                    
                    <span className="crud"><img src={editar}></img> </span>
                </div>


                <div className="list-client">
                    {Clients.map((item, index) => {
                        return (
                            <ClientCard item={item} index={index}></ClientCard>
                        )
                    })}
                </div>
            </div>

            {model ? 

            <div className="model-crud">
                <Model setModel = {setModel}></Model>

            </div> 
            
            : ""}

        </>
    )
}