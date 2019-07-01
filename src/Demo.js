import React,{Component} from 'react';
import ReactDOM from 'react-dom';

// Function based component
const Demo = (props) => {
  return <div className="name-card">
    <h1> Hello {props.name} </h1>
    <p>Web Developer</p>
  </div>
}

// Class based component

// class Demo extends Component {
//   render() {
//     return <div className="name-card">
//       <h1> Hello {this.props.name} </h1>
//       <p>Web Developer</p>
//     </div>
//   }
// }

export default Demo;
