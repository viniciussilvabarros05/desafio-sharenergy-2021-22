import data from "../dadosUsina.json"

const datadb = data[0]

function CalcFullEnergy() {
    let i
    let TotalHour = 0
    let TotalPotencia

    for (i = 0; i < datadb.length; i = i + 3) {

        TotalHour = TotalHour + (datadb[i].potencia_kW)
        TotalPotencia = (TotalHour * 0.25 * 0.95).toFixed(2)
    }
    return (TotalPotencia)

}

export default function Percentage(state = CalcFullEnergy(), action) {

    switch (action.type) {
        case "PERCENTAGE":

            return parseFloat(action.payload)

        default:
            return state
    }
}