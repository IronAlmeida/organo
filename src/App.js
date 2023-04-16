import { useState } from "react";
import Banner from "./components/Banner"
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Dev-Ops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Desing',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const nomes = times.map(time => time.nome)

  const [cards, setCard] = useState([])

  const novoCard = (card) => {
    setCard([...cards, card])
  }

  return (
    <div>
      <Banner />
      <Form key={nomes} times={nomes} cadastrarCard={card => novoCard(card)}/>
      {times.map(time => <Team 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={cards.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Footer />
    </div>
  );
}

export default App;
