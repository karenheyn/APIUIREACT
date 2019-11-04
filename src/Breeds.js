import React ,{Component} from 'react';
import './App.css';


class Dogs extends Component {
  constructor(props){
    super(props)
    this.state = {
      dogs:[]
    }
  }
  componentDidMount(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res=> res.json())
    .then(res => {
    console.log(res)
    this.setState({ dogs: res})
    console.log(this.state.dogs)
    console.log(this.state.dogs.message)
    
  })
  }

render() {
 
  return(
    <div>
      <img src= {this.state.dogs.message} alt = 'dog'/>
    </div>
  );
}
}
export default Dogs;