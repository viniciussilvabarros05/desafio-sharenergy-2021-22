import data from "../dadosUsina.json"

const datadb = data

function CalcFullEnergy() {
    let i
    let TotalForHour = 0
    let TotalPotencia


    /* A lógica foi a seguinte:
     O loop acrescenta 2 a cada rodada, pegando a posição do item i inicialmente setado como 0, e  
    a posição do item i + 1, assim conseguimos pegar a soma de todas as potências.

    Para o intervalo de tempo, a logica foi a mesma para pegar o intervalo entre cada dois dados e multiplicar 
    seu intervalo por sua soma de potências para cada rodada do loop.
    

    
    */
    for (i = 0; i < datadb.length - 1; i = i + 2) {

        TotalForHour = (TotalForHour + (datadb[i].potencia_kW + datadb[i + 1].potencia_kW) * /*SOMA DAS POTÊNCIAS */
            (datadb[i + 1].tempo_h - datadb[i].tempo_h)) /*DELTA t */

        TotalPotencia = TotalForHour.toFixed(2)
    }
    return (TotalPotencia)

}

//Setando o estado com o retorno da função
export default function Percentage(state = CalcFullEnergy(), action) {

    return state
}