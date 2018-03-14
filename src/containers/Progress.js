
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Statbox from '../components/Statbox'
import SubmitGuess from '../components/SubmitGuess';
import Word from '../components/Word';
import HangSteps from '../components/HangSteps';

class ProgressBar extends Component {

  render() {

  function test(progress){
    //let progressString = `${progress}%`
    return {width : `${progress}%`}
  };

  let style = test(99)

  //  let progress = this.props.countWrong.counter

    return (
      <div className="text-white bg-dark">
        <div className="progress" style={{height: "10px"}}>
          <div className="progress-bar progress-bar-striped bg-secondary" role="progressbar" style={style}></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ countWrong }) => ({ countWrong })
export default connect(mapStateToProps, {})(ProgressBar)
