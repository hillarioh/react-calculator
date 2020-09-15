import React from 'react';
import ReactDOM from 'react-dom';
import {CalcUi} from './calculator';

class CalculatorContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            result: 0,
            num1: '',
            num2: ''
        }
        this.setNum = this.setNum.bind(this);
    }

    setNum(input){
        this.setState({
        });
    }   

    render(){
        let {num1,num2} = this.state;
        return (
           <CalcUi  />
         
        );
    }
}

ReactDOM.render(<CalculatorContainer />,document.getElementById('app'));
