import React from "react";
import './App.css';

class Buttons extends React.Component {

  render(){
    return(
    
      <div className="buttons">

      <button className="btn">
        Dodaj
      </button>
      <button className="btn">
        Zatwierdź
      </button>

      </div>
    )
  }
}
class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 1, norms:(170), clicked:false, };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
    
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    
    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds,
    };
    return obj;
  }
  

  startTimer(clicked) {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }
  countDown() {
    // add a second, set state so a re-render happens.
      
    function round(value, precision) {
      var multiplier = Math.pow(10, precision || 0);
      return Math.round(value * multiplier) / multiplier;
    }
    var seconds = this.state.seconds + 1;
    var norms = this.state.norms-0.036; // because 0.036 is 1/3600 of an norm/hour..
    
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
      norms: round(norms, 2)
    }
    );
      
  }

  render() {
    return(
      <div>
              <div>
                <h1>Obliczator 3200</h1>
                  <ul>
                  <li className="stopwatch-line"><b>Czas pracy:</b>
                    <b>
                      {this.state.time.h<9 ? "0"+this.state.time.h : this.state.time.h}:
                      {this.state.time.m<9 ? "0"+this.state.time.m : this.state.time.m}:
                      {this.state.time.s<9 ? "0"+this.state.time.s : this.state.time.s}
                    </b>
                  </li>
                  <li><b>Aktualny wynik:</b><b>{this.state.norms}</b></li>
                  <li><b>Zrobione:</b><b>170</b></li>
                  <li><b>Do zatwierdzenia:</b><b></b></li>
                </ul>
              </div>
          
          
       
        <button className="btn" onClick={this.startTimer}>Start</button>
        <br/>
        <Buttons/>
      </div>
    );
  }
}




const App = () => {
    
      return (
        <div className="container">
          <Stopwatch/>
        </div>
      );

}
export default App;