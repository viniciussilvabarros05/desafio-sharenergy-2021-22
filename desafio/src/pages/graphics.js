import data from "../dadosUsina.json"
import { CartesianGrid, XAxis, YAxis, Bar, ResponsiveContainer, ComposedChart, Tooltip } from 'recharts';
import { useSelector, useDispatch } from "react-redux"
import { parsedMenuBar } from "../actions/actionList";
import "../styles/graphics.scss"
import celsius from "../assets/celsius.png"
import corrente from "../assets/corrent-a.png"
import tensao from "../assets/volt.png"
import potencia from "../assets/potencia.png"



function Graphic() {
  const Potencia = useSelector(state => state.Potencia) //Pegando estado que contem o cálculo total da energia produzida
  const menuBar = useSelector(state => state.menuBar) // Pegando o estado que o menu de variáveis vão setar para o gráfico mudar 
  const datadb = data // Database da usina
  const dataDB_timeassert = [] // Array criada para receber os dados formatados da usina em horas reais
  const dispatch = useDispatch()


  /* A função recebe um parâmentro do tipo string, que recebe simplesmente o nome da variável a ser plotada no gráfico */

  function parseVariable(i) {
    if (menuBar === i) { 
      return
    }
    dispatch(parsedMenuBar(i))
  }


  /*A função convert está recebendo um parâmentro a, nele virá a hora em decimal e retornará o tempo em horas e minutos */

  function convert(a) {

    const hour = Math.floor(a)
    const minutes = Math.floor((a % 1) * 60)

    const time = `${hour}h${minutes}min`

    return time

  }

  /*Neste forEach, está fazendo uma cópio do datadb para  o dataDB_timeassert com as horas certas */
  
  datadb.forEach(item => {

    const { tempo_h,
      tensao_V,
      corrente_A,
      potencia_kW,
      temperatura_C } = item

    const newItem = {
      temperatura_C,
      tensao_V,
      corrente_A,
      potencia_kW,
      tempo_h: convert(tempo_h)
    }
    dataDB_timeassert.push(newItem)
  })



/*====================================== FORMATANDO O VALOR DO LUCRO ===================================== */
  function HandleCalculatingCash() {
    let TotalCash = (Potencia * 0.95).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (TotalCash)
  }


  return (
    <>

      <div className="bar-variables">
        <div > <img onClick={() => parseVariable("potencia_kW")} src={potencia} alt="celsius" /> <span className="tooltiptext">Potencia</span></div>

        <div className="point"></div>
        <div><img onClick={() => parseVariable("tensao_V")} src={tensao} alt="celsius" /><span className="tooltiptext">Tensão</span></div>
        <div className="point"></div>
        <div><img onClick={() => parseVariable("corrente_A")} src={corrente} alt="celsius" /><span className="tooltiptext">Corrente</span></div>
        <div className="point"></div>
        <div><img onClick={() => parseVariable("temperatura_C")} src={celsius} alt="celsius" /><span className="tooltiptext">Temperatura</span></div>

      </div>

      <div className="content-graphic">
        <ResponsiveContainer width="100%" height="80%">

          <ComposedChart height={800} data={dataDB_timeassert} margin={{ left: -30 }}>

            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="tempo_h" scale="auto" />
            <YAxis />
            <Bar dataKey={menuBar} barSize={5} fill="#bfc427"></Bar>
            <Tooltip></Tooltip>
          </ComposedChart>

        </ResponsiveContainer>
        <div className="legends">
          <p> Total produzido no dia:<div>{Potencia}kw</div></p>
          <p>Total de ganhos: <div>{HandleCalculatingCash()}</div></p>
        </div>

      </div>


    </>
  );
}

export default Graphic;