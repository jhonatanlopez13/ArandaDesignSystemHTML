import React, {Component} from "react";
import "./module.css/style.css";


class Tooltips extends Component{
    render(){
        return(
            <>
                <div className="caja">
                    <h1 className="seguircaso">seguir caso </h1>
                    <span className="tooltips">
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
            </>
        )
    }
}
export default Tooltips;