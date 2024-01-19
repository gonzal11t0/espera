import React,{Component} from 'react';
import "./listaEspera.css";

class CambiosListaEspera extends Component {
    constructor(props){
        super(props);
        this.state = {
            persona:[
                {nombre:"Persona 1", estado:"En espera"},
                {nombre:"Persona 2", estado:"En espera"},
                {nombre:"Persona 3", estado:"En espera"},
                {nombre:"Persona 4", estado:"En espera"},
                {nombre:"Persona 5", estado:"En espera"},
            ],
        };
    };

    cambiosEnLista = (index) =>{
        const nuevasPersonas= [...this.state.persona];
        nuevasPersonas[index].estado="Aceptado";
        this.setState({persona:nuevasPersonas});
    };

    render() {
        return (
            <div className='container'>
                <div className='container-lista'>
                    {this.state.persona.map((persona, index) => (
                        <div key={index} className={`persona ${persona.estado === "Aceptado" ? "aceptado" : ""}`}>
                            <p>{persona.nombre} - {persona.estado}</p>
                            <button onClick={() => this.cambiosEnLista(index)}>Actualizar estado</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    
};

export default CambiosListaEspera;