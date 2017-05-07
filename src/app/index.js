var React = require('react');
var ReactDOM = require('react-dom');


//Create Compon

class HolaComponent extends React.Component{
  constructor() {
     super();
     this.state = {
        hola: "Hello",
    };
  }
    render(){
        return <div>
            <ul>{this.state.hola}</ul>
             </div>
    } //render
};


ReactDOM.render(<HolaComponent/>, document.getElementById('wrapper'));
