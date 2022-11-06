import React, {Component} from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      hora: '00:00:00'
    };
  }


componentDidMount(){

  setInterval(()=>{  //setInterval vai começar um novo timer 
    this.setState({hora: new Date().toLocaleTimeString()})
  },1000);
}

componentDidUpdate(){
  console.log('Atualizou!!!'); // a cada atualização do timer é chamado a função Update
}

render(){
  return(
    <div>
      <h1> Meu Projeto {this.state.hora}</h1>
    </div>
  );
}
}


export default App;