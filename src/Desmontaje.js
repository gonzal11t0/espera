import React, {Component} from 'react'


class Desmontaje  extends Component{
    componentWillMount(){
        console.log("El desmontaje se ha iniciado");
    };

    render(){
        return <div className='container'>
            <h1>Component desmontaje</h1></div>
    };
};
export default Desmontaje;