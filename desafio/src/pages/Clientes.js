
import "../styles/Clientes.scss"
import editar from "../assets/editar.png"
import excluir from "../assets/excluir.png"
import Clientes from "../dadosClientes.json"
import { ClientCard } from "../components/ClientCard"

export function Clients() {

   


    return (
        <div className="table-client">

            <div className="header">
                <span className="crud">+</span>
                <div>
                    <input type="text" placeholder="Pesquisar cliente"></input>
                    <span>🔍</span>
                </div>
                <span className="crud"><img src={excluir}></img></span>
                <span className="crud"><img src={editar}></img> </span>
            </div>


            <div className="list-client">
                {Clientes.map((item, index) => {
                    return (
                       <ClientCard item = {item} index = {index}></ClientCard>
                    )
                })}
            </div>
        </div>
    )
}