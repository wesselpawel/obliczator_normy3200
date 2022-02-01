import React from "react";
import './App.css';
import Buttons from './Buttons'

class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 1, norms:0, value: 0, zrobione: 0,};
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addPositions = this.addPositions.bind(this);
   
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  addPositions(e) {
    let zrobione = Math.floor(this.state.value)+Math.floor(this.state.zrobione)
    let norms = Math.floor(this.state.norms)+Math.floor(this.state.zrobione)
    this.setState({zrobione: zrobione, norms: norms,});
    
    
    e.preventDefault();
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
  

  startTimer() {
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
    var norms = this.state.norms-0.036; // because 0.036 is 1/3600 of an norm/second..
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
      norms: round(norms, 2)
    }
    );
      
  }

  render() {
    return(
      <Buttons
        time={this.state.time}
        norms={this.state.norms}
        zrobione={this.state.zrobione}
        value={this.state.value}
        seconds={this.state.seconds}
        addPositions={this.addPositions}
        handleChange={this.handleChange}
        startTimer={this.startTimer}
      />
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