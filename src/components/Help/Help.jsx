import React, {Component} from "react";
import "./module.css/style.css";


class Help extends Component{
    render(){
        return(
            <>
                <div class="tooltip">
                    <h1 className="ayuda"></h1>
                <span className="tooltiptext">colocar mensaje de ayuda </span>
                </div>

            </>
        )
    }
}
export default Help;