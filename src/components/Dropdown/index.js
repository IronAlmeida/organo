import './Dropdown.css'

function Dropdown (props){

  return (
    <div className='dropdown'>
      <label>{props.label}:</label>
      <select required={props.obrigatorio} value={props.valor} onChange={event => props.aoAlterar(event.target.value)}>
        <option value=""></option>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default Dropdown