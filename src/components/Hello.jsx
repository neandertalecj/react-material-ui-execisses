import React, { Component } from 'react';

class Hello extends Component {
    state = {  }
    render() { 
        return ( 
            <h1>{this.props.name}</h1>
         );
    }
}
 
export default Hello;