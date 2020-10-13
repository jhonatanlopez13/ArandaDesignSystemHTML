import React, { Component} from "react";
import "./module.css/style.css";

class DateHours extends Component{

    render(){
        return(
        <>
        
            <div className="container">
                <input type="datetime-local" className="calendario2  border-gray  border px-6 rounded text-gray"   id="meeting-time" name="meeting-time" value="2018-06-12 19:30" min="2018-06-07 00:00" max="2018-06-14 00:00"></input>
                <div className="reloj">
                </div>
            </div>
        </>
        )
    }
}
export default DateHours;