import Clients from "../dadosClientes.json"

export default function dataClient(state = Clients, action){
    switch (action.type) {
        case "DELETE":
            let itemDeleted = state.filter((item)=> item.numeroCliente !== action.payload)
            return state = itemDeleted;
    
        default:
            return state
    }
}
