import React from 'react';



export class CalcUi extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           num1: '',
           num2: '',
           operator: false, 
           meth: '',
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


    clear(){
        this.setState({
            num1: '',
           num2: '',
           operator: false, 
           meth: '',
           result: 0
        });
    }

    posOrNeg(){}

    percentage(){}

    add(){ 

        if(this.state.num2){
            this.setState({
               result: parseFloat(this.state.num1) +  parseFloat(this.state.num2)
            });
        } else  {
                this.setState({
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
                    meth: this.divide
                });
            }
    }

    getResult(){

    }




    render(){
        // console.log(this.state.result)
        return(
            <div>
                <div id="calc">
                    <div className="result"><p>{this.state.result || 0}</p></div>
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
                        <p id="." onClick={this.handleInput}>.</p>
                        <p id="equal" onClick={this.getResult}>=</p>
                    </div>
                </div>
            </div>
        );
    }
}