import React, { Component } from 'react'

class Actualizacion extends Component{

    constructor(props){
        super(props);
        this.state = {
            mensaje:"primer mensaje",
        };
    };


    componentDidMount(){
        console.log("La actualizacion se ha contado");
    };

    componentDidUpdate(){
        console.log("El componente se ha actualizado");
    };

    actualizarMensaje = () =>{
        this.setState({
            mensaje:"segundo mensaje",
        });
    };

    render(){
        return <div className='container'>
            <p>{this.state.mensaje}</p>
            <button onClick={this.actualizarMensaje}>Actualizar mensaje </button>
        </div>
    }
};

export default Actualizacion;
