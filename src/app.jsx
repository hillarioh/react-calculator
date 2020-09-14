import React from 'react';
import ReactDOM from 'react-dom';

class CalculatorContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            result: 0,
            num1: '',
            num2: ''
        }
        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
        this.clear = this.clear.bind(this);
    }

    setNum1(e){
        this.setState({
            num1: e.target.value
        });
    }

    setNum2(e){
        this.setState({
            num2: e.target.value
        });
    }

    add(){
        this.setState({
            result: parseInt(this.state.num1) + parseInt(this.state.num2)
        });
    }
    subtract(){
        this.setState({
            result: parseInt(this.state.num1) - parseInt(this.state.num2)
        });
    }

    multiply(){
        this.setState({
            result: parseInt(this.state.num1) * parseInt(this.state.num2)
        });
    }



    divide(event){
        event.preventDefault();
        this.setState({
            result: parseFloat(this.state.num1) / parseFloat(this.state.num2)
        });
    }

    clear(e){
        e.preventDefault();
        this.setState({
            result: 0,
            num1: '',
            num2: ''
        });
    }

    render(){
        let {num1,num2} = this.state;
        return (
           
            <div>
                <h1>{this.state.result}</h1>
                <input type="text" value={num1} onChange={this.setNum1} />
                <input type="text" value={num2} onChange={this.setNum2} />
                <button type="submit" onClick={this.clear}>Clear</button>
                <div>
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.multiply}>*</button>
                <button onClick={this.divide}>/</button>
                </div>
                
            </div>
        );
    }
}

ReactDOM.render(<CalculatorContainer />,document.getElementById('app'));
