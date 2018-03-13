import React, { Component } from 'react';
import { connect } from 'react-redux'
import NewGameButton from '../components/newGameButton';
import '../style/Statbox.css';

class Statbox extends Component {

  render() {
    return (
      <div className="Statbox">

      <table class="table table-striped">
        <tbody>
          <tr>
            <td style={{width: '40%'}}>
              <div>Log: <span>{this.props.logInput.guessesSoFar}</span></div>
            </td>
            <td style={{width: '40%'}}>
              <div>Wrong: <span>{this.props.countWrong.counter}</span></div>
            </td>
            <td style={{width: '20%'}}>
              <NewGameButton />
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ logInput, countWrong }) => ({ logInput, countWrong })
export default connect(mapStateToProps, {})(Statbox)
