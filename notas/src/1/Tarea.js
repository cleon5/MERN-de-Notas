import {Mos} from './DBConect'
require('./DBConect')
function Tarea() {
    const mos = Mos()
    console.log(mos)
  return (
    <Mos/>
  )
}

export default Tarea;