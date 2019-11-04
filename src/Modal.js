import React from "react";
import Dogs from './Breeds'
import './App.css'

class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if(!this.props.show){
    return null;
}
    return (
    <div className = 'modal'>
    <div><Dogs/></div>
    <div>
          <button className = "buttonmodal"
            onClick={this.onClose}>
            Close
          </button>
          </div>
          </div>
        );
  }
}
export default Modal