import './App.css';
import react, {Component} from 'react'


class App extends Component{
  state = {
    operandA: 0,
    operandB: 0,
    operation: '-',
    result: 0,
  };

  onOperandAChange = (e) => {
    this.setState({
      operandA: +e.target.value,
    });
  };
   
  onOperandBChange = (e) => {
    this.setState({
      operandB: +e.target.value,
    });
  };

  onOperatorChange = (e) => {
    this.setState({
      operation: e.target.value,
    });
  }

calculate = () =>{
  let result = 0;
  switch(this.state.operation){
    case '+': result = this.state.operandA + this.state.operandB; break;
    case '-': result = this.state.operandA - this.state.operandB; break;
    case '/': result = this.state.operandA / this.state.operandB; break;
    case '*': result = this.state.operandA * this.state.operandB; break;
  }

  this.setState({
    result,

  })
};

  render() {
    return ( 
    <div className='container'>
      
      <input 
      value={this.state.operandA} 
      onChange={this.onOperandAChange} />

      <select value={this.state.operation} onChange={
        this.onOperatorChange
      }>
       <option value="+">+</option> 
       <option value="-">-</option> 
       <option value="/">/</option> 
       <option value="*">*</option> 
         </select>
      <input value={this.state.operandB} onChange={this.onOperandBChange} />
      <button onClick={this.calculate}>Calculate</button>
      <div>Result: {this.state.result}</div>
    </div>
    );
  }
}

export default App;