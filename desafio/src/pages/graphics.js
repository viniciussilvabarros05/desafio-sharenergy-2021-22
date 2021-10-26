import data from "../dadosUsina.json"


import { Line, CartesianGrid, XAxis, YAxis, Bar, ResponsiveContainer, ComposedChart, Tooltip } from 'recharts';



function Graphic() {

  const datadb = data[0]
  const dataDB_timeassert = []


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






  return (
    <>
      <ResponsiveContainer width="100%" height="80%">

        <ComposedChart width={1000} height={800} data={dataDB_timeassert} margin={{ top: 100, left: 20, right: 20, bottom: 0 }}>
         
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey={"tempo_h"} scale="auto" />
          <YAxis />
          <Bar dataKey="potencia_kW" barSize={5} fill="#E69232"></Bar>
          <Tooltip></Tooltip>
        </ComposedChart>

      </ResponsiveContainer>
    </>
  );
}

export default Graphic;