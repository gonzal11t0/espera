import React, { Component } from 'react'

class Montaje extends Component{
    componentDidMount() {
        console.log("El montaje se ha montado");
    }

    render() {
        return <div className='container'>
            <h1>Component Montaje</h1></div>;
    }
};
export default Montaje;
