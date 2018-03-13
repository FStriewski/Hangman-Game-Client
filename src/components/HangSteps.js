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
      <div>
      <img className="image img-fluid rounded float-right" alt="Responsive image" src={src}/>
      </div>
    )}
}

const mapStateToProps = ({ countWrong }) => ({ countWrong })
export default connect(mapStateToProps, {})(HangSteps)
