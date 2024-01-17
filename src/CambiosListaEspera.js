import React,{Component} from 'react';
import "./listaEspera.css";

class CambiosListaEspera extends Component {
    constructor(props){
        super(props);
        this.state = {
            persona:[
                {nombre:"Gonzalo Lazarte", estado:"En espera"},
                {nombre:"Elisa Besteiro", estado:"En espera"},
                {nombre:"Mariana Lazarte", estado:"En espera"},
                {nombre:"Zoel Lazarte", estado:"En espera"},
                {nombre:"Claudio Lazarte", estado:"En espera"},
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