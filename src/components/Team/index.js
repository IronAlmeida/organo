import Card from '../Card'
import './Team.css'

//dumb componente = sem inteligencia (funcionalidades), mais estatico
function Team (props){

    return (
      props.colaboradores.length > 0 && <section className='team' style={{backgroundColor: props.corSecundaria}}>
      <h3>{props.nome}</h3>
      <span style={{borderColor: props.corPrimaria}}></span>
      <div className='colaboradores'>
        {props.colaboradores.map(colaborador => 
          <Card 
            key={colaborador.nome} 
            nome={colaborador.nome} 
            cargo={colaborador.cargo} 
            imagem={colaborador.imagem}
            corDeFundo={props.corPrimaria}
          />)}
      </div>
    </section>
    )
}

export default Team