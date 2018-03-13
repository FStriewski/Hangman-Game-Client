import React, { Component } from 'react';
import HangSteps from '../components/HangSteps';

class Sidebar extends Component {
  render() {
    return (
      <div className="col-3 text-white bg-dark">
        <HangSteps />
      </div>
    );
  }
}
export default Sidebar;
