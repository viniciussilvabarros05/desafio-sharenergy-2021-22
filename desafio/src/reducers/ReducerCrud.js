import Clients from "../dadosClientes.json"

export default function dataClient(state = Clients, action) {
    switch (action.type) {

        case "ADD":

            return [...state, action.payload]
        case "DELETE":

            return state.filter((item) => item.numeroCliente !== action.payload)


        case "UPDATE":


            state.map(client => {
                if (client.numeroCliente == action.payload.client) {
                    const { nomeCliente, numeroCliente, usinas } = action.payload.update

                    if (nomeCliente) {
                        client.nomeCliente = nomeCliente
                    }
                    if (numeroCliente) {
                        client.numeroCliente = numeroCliente
                    }
                    if (usinas[0].usinaId) {
                        client.usinas[0].usinaId = usinas[0].usinaId
                    }

                    if (usinas[0].percentualDeParticipacao) {
                        client.usinas[0].percentualDeParticipacao = usinas[0].percentualDeParticipacao
                    }
                    return client
                }
            })

        case "FILTER":

            return state


        default:
            return state
    }
}
