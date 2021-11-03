import data from "../dadosUsina.json"

const datadb = data

function CalcFullEnergy() {
    let i
    let TotalHour = 0
    let TotalPotencia


    /* A lógica foi a seguinte: O intervalo delta t encontrado foi de 15 minutos a cada 3 dados
       Então o intervalo será de (0.25 hora) * (soma de todas as potências no intervalo de 15 minutos)
    */ 
    for (i = 0; i < datadb.length; i = i + 3) {

        TotalHour = TotalHour + (datadb[i].potencia_kW)
        TotalPotencia = (TotalHour * 0.25).toFixed(2)
        
    }
    return (TotalPotencia)

}

//Setando o estado com o retorno da função
export default function Percentage(state = CalcFullEnergy(), action) {

   return state
}