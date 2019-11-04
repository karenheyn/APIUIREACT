import React ,{Component} from 'react';
import './App.css';
// import Dogs from './Breeds';
import Modal from './Modal';

 

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
  }
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

    
render() {
 
  return(
    <div className= 'body'>
    <h1>Awesome Dogs</h1>
    <button className = 'buttonfetch' onClick={e => {
              this.showModal();
         }}>New Pooch</button>
    <div className = "container">
    
    <Modal onClose={this.showModal} show = {this.state.show}/>
    </div>
 
    </div>
  );
}
}
export default App;
