import React ,{Component} from 'react';


class Modal extends Component {
    render() {
        if(!this.props.show){
            return null;
        }
      return <div>Hello Modal</div>;
    }
  }
export default Modal