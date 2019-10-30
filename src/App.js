import React ,{Component} from 'react';
import './App.css';
import Dogs from './Breeds';
import Modal from './Modal.js';


class App extends Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: true
    });
  };
render() {
 
  return(
    <div>
    <h1>Awesome Dogs</h1>
    <Modal show={this.state.show} />
    <div className = "container">
      <Dogs className = "dogpic" onClick={e => {
              this.showModal();
         }}/>
      <Dogs className = "dogpic" onClick={e => {
              this.showModal();
         }}/>
      <Dogs className = "dogpic" onClick={e => {
              this.showModal();
         }}/>
    </div>
    </div>
  );
}
}
export default App;
