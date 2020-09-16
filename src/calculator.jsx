import React from 'react';

export class CalcUi extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           num1: '',
           num2: '',
           operator: false, 
           calculation: '',
           meth: '',
           decimal: false,
           result: 0
        }
        this.handleInput = this.handleInput.bind(this);
        this.posOrNeg = this.posOrNeg.bind(this);
        this.clear = this.clear.bind(this);
        this.decimalInput = this.decimalInput.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
        this.percentage = this.percentage.bind(this);
        this.getResult = this.getResult.bind(this);
    }

    handleInput(e){
        this.setState({
            calculation: this.state.calculation += e.target.id
        });

        if (this.state.operator){
            this.setState({
                num2: this.state.num2 += e.target.id
             });
            this.state.meth();
        } else {
            this.setState({
                num1: this.state.num1 += e.target.id,
                result: parseFloat(this.state.num1)
             });
        }

    }

    decimalInput(e){
        if(!this.state.decimal){
            this.setState({
                decimal: true
            })
            this.handleInput(e);
        }
    }

    clear(){
        this.setState({
            num1: '',
           num2: '',
           operator: false, 
           meth: '',
           calculation: '',
           decimal: false,
           result: 0
        });
    }

    posOrNeg(){
        this.setState({
            result: (this.state.result)*(-1)
        })
    }

    percentage(){
        this.setState({
            result: (this.state.result)/(100)
        })
    }

    add(){ 

        if(this.state.num2){
            this.setState({
               result: parseFloat(this.state.num1) +  parseFloat(this.state.num2)
            });
        } else  {
                this.setState({
                    calculation: this.state.calculation += '+',
                    decimal: false,
                    operator: true,
                    meth: this.add
                });
            }
    }

    subtract(){
        if(this.state.num2){
            this.setState({
               result: parseFloat(this.state.num1) -  parseFloat(this.state.num2)
            });
        } else  {
                this.setState({
                    calculation: this.state.calculation += '-',
                    decimal: false,
                    operator: true,
                    meth: this.subtract
                });
            }
    }

    multiply(){
        if(this.state.num2){
            this.setState({
               result: parseFloat(this.state.num1) *  parseFloat(this.state.num2)
            });
        } else  {
                this.setState({
                    calculation: this.state.calculation += '*',
                    decimal: false,
                    operator: true,
                    meth: this.multiply
                });
            }
    }

    divide(){
        if(this.state.num2){
            this.setState({
               result: parseFloat(this.state.num1) /  parseFloat(this.state.num2)
            });
        } else  {
                this.setState({
                    operator: true,
                    decimal: false,
                    calculation: this.state.calculation += '/',
                    meth: this.divide
                });
            }
    }

    getResult(){
        this.setState({
            calculation: ''
        });
    }

    render(){
        return(
            <div>
                <div id="calc">
                    <div className="result">
                        <p>
                            <span>{this.state.calculation}</span>
                            <span className="input">{this.state.result || 0}</span>
                        </p>
                    </div>
                    <div className="col-4 r1">                    
                        <p id="ac" onClick={this.clear}>AC</p>
                        <p id="p-n" onClick={this.posOrNeg}>+/-</p>
                        <p id="per" onClick={this.percentage}>%</p>
                        <p id="div" onClick={this.divide}>/</p>
                    </div>
                    <div className="col-4 r2">
                        <p id="7" onClick={this.handleInput}>7</p>
                        <p id="8" onClick={this.handleInput}>8</p>
                        <p id="9" onClick={this.handleInput}>9</p>
                        <p id="div" onClick={this.multiply}>X</p>
                    </div>
                    <div className="col-4 r3">
                        <p id="4" onClick={this.handleInput}>4</p>
                        <p id="5" onClick={this.handleInput}>5</p>
                        <p id="6" onClick={this.handleInput}>6</p>
                        <p id="sub" onClick={this.subtract}>-</p>
                    </div>
                    <div className="col-4 r4">
                        <p id="1" onClick={this.handleInput}>1</p>
                        <p id="2" onClick={this.handleInput}>2</p>
                        <p id="3" onClick={this.handleInput}>3</p>
                        <p id="plus" onClick={this.add}>+</p>
                    </div>
                    <div className="col-3 r5">
                        <p id="0" onClick={this.handleInput}>0</p>
                        <p id="." onClick={this.decimalInput}>.</p>
                        <p id="equal" onClick={this.getResult}>=</p>
                    </div>
                </div>
            </div>
        );
    }
}