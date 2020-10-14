import React, {Component, component} from "react";
import './module.css/style.css';


class Progress extends Component{
    
    
    render(){
        return(
          <div className="contenedorProgressBar">
            <span className="progresstext"></span>
            <progress value="50" max="100">30%</progress>
              {/* <progress max="100">Indeterminate</progress> */}
          </div>
         
           
        )
    }
}
export default Progress;