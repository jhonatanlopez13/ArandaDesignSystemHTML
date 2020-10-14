import React, { Component} from "react";
import "./module.css/style.css";

class DateHours extends Component{
    state={
        fecha:new Date()
      }
      onChange=fecha=>{
        this.setState({fecha: fecha});
      }

    render(){
        return(
        <>
        
            <div className="container">
                <input type="datetime-local" className="calendario2  border-gray  border px-6 rounded text-gray"  selected={this.state.fecha} onChange={this.onChange} locale="es" dateFormat="dd-MM-yyyy"></input>
                <div className="reloj">
                </div>
            </div>
        </>
        )
    }
}
export default DateHours;