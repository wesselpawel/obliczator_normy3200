import React from "react";


export default class Buttons extends React.Component {
    render(){
      return(
      
        <div className="buttons">
          <div>
            <div>
              <h1>Obliczator 3200</h1>
                <ul>
                  <li className="stopwatch-line"><b>Czas pracy:</b>
                    <b>
                      {this.props.time.h<10 ? "0"+this.props.time.h : this.props.time.h}:
                      {this.props.time.m<10 ? "0"+this.props.time.m : this.props.time.m}:
                      {this.props.time.s<10 ? "0"+this.props.time.s : this.props.time.s}
                    </b>
                  </li>
                  <li><b>Aktualny wynik:</b><b>{this.props.norms}</b></li>
                  <li><b>Zatwierdzone:</b><b>{this.props.zrobione}</b></li>
                </ul>
            </div>
                <input 
                type="text" 
                value={this.props.value} 
                onChange={this.props.handleChange}
                />
        
                <button
                className="btn" 
                onClick={this.props.addPositions}
                type="submit"
                >
                Dodaj
                </button>
                    <br/>
                <button 
                className="btn" 
                onClick={this.props.startTimer}
                >
                Start
                </button>
          </div>

          
  
        </div>
      )
    }
  }