import './TextField.css'

function TextField (props) {

  const aoDigitar = (event) => {
    props.aoAlterar(event.target.value)
  }

  return (
    <div className="text-field">
      <label>{props.label}:</label>
      <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} type={props.type} placeholder={props.placeholder}/>
    </div>
  )
}

export default TextField