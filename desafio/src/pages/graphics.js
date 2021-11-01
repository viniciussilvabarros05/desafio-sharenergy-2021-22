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
  const Percentage = useSelector(state => state.Percentage)
  const menuBar = useSelector(state => state.menuBar)
  const datadb = data[0]
  const dataDB_timeassert = []
  const dispatch = useDispatch()

  function convert(a) {

    const hour = Math.floor(a)
    const minutes = Math.floor((a % 1) * 60)

    const time = `${hour}h${minutes}min`

    return time

  }


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




  function parseVariable(i) {
    if (menuBar === i) {
      return
    }
    dispatch(parsedMenuBar(i))
  }


  function CalcFullEnergy() {
    let TotalCash = (Percentage * 0.95).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return ( TotalCash)
  }

  return (
    <>

      <div className="bar-variables">
        <div> <img onClick={() => parseVariable("potencia_kW")} src={potencia} alt="celsius" /></div>

        <div className="point"></div>
        <div><img onClick={() => parseVariable("tensao_V")} src={tensao} alt="celsius" /></div>
        <div className="point"></div>
        <div><img onClick={() => parseVariable("corrente_A")} src={corrente} alt="celsius" /></div>
        <div className="point"></div>
        <div><img onClick={() => parseVariable("temperatura_C")} src={celsius} alt="celsius" /></div>

      </div>

      <div className="content-graphic">
        <ResponsiveContainer width="100%" height="80%">

          <ComposedChart height={800} data={dataDB_timeassert} >

            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="tempo_h" scale="auto" />
            <YAxis />
            <Bar dataKey={menuBar} barSize={5} fill="#bfc427"></Bar>
            <Tooltip></Tooltip>
          </ComposedChart>

        </ResponsiveContainer>
        <div className="legends">
          <p> Total produzido no dia:<div>{Percentage}kw</div></p>
          <p>Total de ganhos: <div>{CalcFullEnergy()}</div></p>
        </div>

      </div>


    </>
  );
}

export default Graphic;