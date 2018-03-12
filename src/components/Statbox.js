import React, { Component } from 'react';
import { connect } from 'react-redux'
import  { hangSteps }  from './hangSteps'
import './Statbox.css';

class Statbox extends Component {

  render() {
    let gallow = hangSteps

    return (
      <div className="Statbox">
        <div>Log: <span>{this.props.logInput.guessesSoFar}</span></div><br/>
        <div>Wrong: <span>{this.props.countWrong.counter}</span></div>
        <div> {gallow[this.props.countWrong.counter]}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ logInput, countWrong }) => ({ logInput, countWrong })
export default connect(mapStateToProps, {})(Statbox)
