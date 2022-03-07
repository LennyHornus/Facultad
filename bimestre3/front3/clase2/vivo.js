const divRoot = document.getElementById("root");
const listaMensajes = [
    { mensaje : "Hola que tal",
      user: "self"
    },
    { mensaje : "Bien y vos",
      user: "otro"
    },
    { mensaje : "Todo tranquilo",
      user: "self"
    },
    { mensaje : "Escuchame",
      user: "otro"
    },
    { mensaje : "No me anda react",
      user: "otro"
    },
    { mensaje : "Jodete",
      user: "self"
    }
] 



const ComponenteParrafo = function(props){
    return <p className= {props.tipoMensaje != "self"? "contacto": ""} id={props.id}> {props.texto}</p>;
}

const ComponenteChat = function(){
    return (
    <div className = "chat">
        { listaMensajes.map( (item, i) => <ComponenteParrafo key= {i + 1} id={i+1} tipoMensaje={item.user} texto = {item.mensaje}/>)}
    </div>
    )
}

ReactDOM.render(<ComponenteChat/>, divRoot);