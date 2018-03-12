import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Statbox.css';

class Statbox extends Component {

  render() {
    return (
      <div className="Statbox">
        <div>Log: <span>{this.props.logInput.guessesSoFar}</span></div><br/>
        <div>Wrong: <span>{this.props.countWrong.counter}</span></div>
      </div>
    );
  }
}

const mapStateToProps = ({ logInput, countWrong }) => ({ logInput, countWrong })
export default connect(mapStateToProps, {})(Statbox)
