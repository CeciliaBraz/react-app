import { extend } from 'lodash';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css';
import { render } from '@testing-library/react';


function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

class Dia extends React.Component{
  state = { foiClicado: '0' };

  constructor(){
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event){
    if(this.state.foiClicado === '0'){
      this.setState( {foiClicado: '1'} );
    }
    console.log(this.props.dia + "foi clicado" + this.props.foiClicado + "vezes");  
  }

  render(){
    return(
      <button className="dia" onClick={this.handleOnClick}>
        {
          (this.props.dia > 0 && this.props.dia < 32) ?
          this.props.dia :
          '.'
        }
      </button>
    );
  }
}

function Semana(props){
  return(
    <div>
      <Dia dia={props.diaInicial} />
      <Dia dia={props.diaInicial + 1} />
      <Dia dia ={props.diaInicial + 2} />
      <Dia dia={props.diaInicial + 3} />
      <Dia dia={props.diaInicial + 4} />
      <Dia dia={props.diaInicial + 5} />
      <Dia dia={props.diaInicial + 6} />
    </div>
  )
}

function Agenda(props){
  return(
    <div>
      <div>{props.mes}/ {props.ano}</div>
      <div>
        <button className="dia">D</button>
        <button className="dia">S</button>
        <button className="dia">T</button>
        <button className="dia">Q</button>
        <button className="dia">Q</button>
        <button className="dia">S</button>
        <button className="dia">S</button>

      </div>
      <div>
        <Semana diaInicial={-3}/>
        <Semana diaInicial={4}/>
        <Semana diaInicial={11}/>
        <Semana diaInicial={18}/>
        <Semana diaInicial={25}/>
        <Semana diaInicial={32}/>
    </div>

    <br />
    <div>
      <MyApp />
    </div>

    </div>
  )
}



ReactDOM.render (<Agenda mes={7} ano={2021} />, document.getElementById('root'));