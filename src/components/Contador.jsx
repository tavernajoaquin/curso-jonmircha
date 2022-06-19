import React, {Component} from "react";

export default class Contador extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 0,
    };

    setInterval(()=>{
      this.setState({
        contador: this.state.contador + 1,
      });
    },1000);
  }
  render() {
    return (
      <div>
        {this.state.contador}
      </div>
    );
  }
}