import React, {Component} from "react";
import "./module.css/style.css";


class Help extends Component{
    render(){
        return(
            <>
             <div className="container">  
                    <button className="ayuda"></button><br/>  
                        <div id="texto" className="rounded">
                            <p>hola gente </p>
                        </div>
              </div>
            </>
        )
    }
}
export default Help;