import './Form.css'
import TextField from '../TextField'
import Dropdown from '../Dropdown'
import Button from '../Button'
import { useState } from 'react'

function Form (props){

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (event) => {
    event.preventDefault()
    props.cadastrarCard({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className='form'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card</h2>
        <TextField 
          obrigatorio={true} 
          label={'Nome'} 
          type={'text'} 
          placeholder={'Digite seu nome'} 
          valor={nome}
          aoAlterar={valor => setNome(valor)}
        />
        <TextField 
          obrigatorio={true}  
          label={'Cargo'} 
          type={'text'} 
          placeholder={'Digite seu cargo'} 
          valor={cargo}
          aoAlterar={valor => setCargo(valor)}
        />
        <TextField 
          label={'Imagem'} 
          type={'text'} 
          placeholder={'Informe o endereço da imagem'} 
          valor={imagem}
          aoAlterar={valor => {setImagem(valor)}}
        />
        <Dropdown 
          obrigatorio={true}  
          label={'Equipe'}
          itens={props.times} 
          valor={time}
          aoAlterar={valor => {setTime(valor)}}
        />
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  )
}

export default Form