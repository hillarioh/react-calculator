import React from 'react';


export class CalcUi extends React.Component {
    render(){
        return(
            <div id="calc">
                <div className="result">NaN</div>
                <div className="col-4 r1">                    
                    <p id="ac">AC</p>
                    <p id="p-n">+/-</p>
                    <p id="per">%</p>
                    <p id="div">/</p>
                </div>
                <div className="col-4 r2">
                    <p id="seven">7</p>
                    <p id="eight">8</p>
                    <p id="nine">9</p>
                    <p id="div">X</p>
                </div>
                <div className="col-4 r3">
                    <p id="four">4</p>
                    <p id="five">5</p>
                    <p id="six">6</p>
                    <p id="sub">-</p>
                </div>
                <div className="col-4 r4">
                    <p id="one">1</p>
                    <p id="two">2</p>
                    <p id="three">3</p>
                    <p id="plus">+</p>
                </div>
                <div className="col-3 r5">
                    <p id="zero">0</p>
                    <p id="point">.</p>
                    <p id="equal">=</p>
                </div>
            </div>
        );
    }
}