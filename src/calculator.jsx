import React from 'react';


export class CalcUi extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            result: 0
        }
        this.handleInput = this.handleInput.bind(this);
        this.posOrNeg = this.posOrNeg.bind(this);
        this.clear = this.clear.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
        this.percentage = this.percentage.bind(this);
    }

    handleInput(e){
        this.setState({
            input: e.target.id
        })
    }

    clear(){
        this.setState({
            result: 0
        })
    }

    posOrNeg(){}

    percentage(){}

    add(){
        this.setState({
           
        });
    }

    subtract(){
        this.setState({
          
        });
    }

    multiply(){
        this.setState({
           
        });
    }

    divide(){
        this.setState({
           
        });
    }

    getResult(){

    }




    render(){
        return(
            <div>
                <div id="calc">
                    <div className="result"><p>{this.state.result}</p></div>
                    <div className="col-4 r1">                    
                        <p id="ac" onClick={this.clear}>AC</p>
                        <p id="p-n" onClick={this.posOrNeg}>+/-</p>
                        <p id="per" onClick={this.percentage}>%</p>
                        <p id="div" onClick={this.divide}>/</p>
                    </div>
                    <div className="col-4 r2">
                        <p id="seven" onClick={this.handleInput}>7</p>
                        <p id="eight" onClick={this.handleInput}>8</p>
                        <p id="nine" onClick={this.handleInput}>9</p>
                        <p id="div" onClick={this.multiply}>X</p>
                    </div>
                    <div className="col-4 r3">
                        <p id="four" onClick={this.handleInput}>4</p>
                        <p id="five" onClick={this.handleInput}>5</p>
                        <p id="six" onClick={this.handleInput}>6</p>
                        <p id="sub" onClick={this.subtract}>-</p>
                    </div>
                    <div className="col-4 r4">
                        <p id="one" onClick={this.handleInput}>1</p>
                        <p id="two" onClick={this.handleInput}>2</p>
                        <p id="three" onClick={this.handleInput}>3</p>
                        <p id="plus" onClick={this.add}>+</p>
                    </div>
                    <div className="col-3 r5">
                        <p id="zero" onClick={this.handleInput}>0</p>
                        <p id="point" onClick={this.handleInput}>.</p>
                        <p id="equal" onClick={this.getResult}>=</p>
                    </div>
                </div>
            </div>
        );
    }
}