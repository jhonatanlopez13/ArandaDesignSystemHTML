import React, {Component} from "react";
import "./module.css/style.css";

class Convenciones extends Component{
    render(){
        return(
            <>
               <div className="container">
                    <div className="rectangulo">
                        <div className="ayudas"></div>
                        <div className="vencidos">
                            <h1 className="vencido">Vencidos</h1>
                        </div>
                        <div className="vencer">
                            <h1 className="vence">Por Vencer</h1>
                        </div>
                      
                        <span className="tool">
                            <h1 className="casosvencidos"> Casos Vencidos</h1>
                            <div className="casosvencidos1">
                            <p className="casosvencidos2">El progreso del caso esta igual o superior al 100%</p>  
                            </div>  
                            {/* casos por vencerse */}
                            <h1 className="casosporvencer">Casos Por Vencer</h1>
                            <div className="casosporvencer1">
                            <p className="casosporvencer2">El progreso del caso está dentro del 80% y el 99%c</p> 
                            </div>         
                        </span>
                    </div>

               </div>
            </>
        )
    }
}
export default Convenciones;