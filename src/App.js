import React ,{Component} from 'react';
import './App.css';
import Dogs from './Breeds';
import Modal from './Modal.js';


class App extends Component {
  state = {
    open: false
  };

  onOpen = () => {
    this.setState({open: true})
  };
  
  onClose = () => {
    this.setState({open:false})
  };

render() {
 const { open } = this.state;
  return(
    <div>
    <h1>Awesome Dogs</h1>
    <div className = "container">
      <Dogs className = "dogpic"/>
      <Dogs className = "dogpic"/>
      <Dogs className = "dogpic"/>
    </div>
    </div>
  );
}
}
export default App;
