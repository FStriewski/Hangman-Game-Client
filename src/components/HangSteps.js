import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/HangSteps.css';

 class HangSteps extends Component {

  render() {

    let step = this.props.countWrong.counter
    if (step === 6) {step = 61}  //Wordpress hosting issue
    let baseUrl = "https://nopathwaygoes.files.wordpress.com/2018/03/"
    let src = baseUrl+step+".png"

    return (
      <div className="col">
      <img className="image img-fluid rounded" alt="Responsive image" src={src} style={{width:"220px"}}/><br/>
      <div className="">From: <i> "Once upon a time in west"</i></div>
      </div>
    )}
}

const mapStateToProps = ({ countWrong }) => ({ countWrong })
export default connect(mapStateToProps, {})(HangSteps)
