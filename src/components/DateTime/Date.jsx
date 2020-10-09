import React, { Component} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./module.css/style.css";

class DateTime extends Component{
  state={
    fecha:new Date()
  }
  onChanger=fecha=>{
    this.setState({fecha: fecha});
  }
  mostrarFecha = fecha=>{
    alert(fecha);
  }

  render(){
    return(
      <>

      <div className="container">
        <div className="calendario1">
          <div className="almanaque" >
            <DatePicker className="border-gray border-2 rounded px-6 py-1"  selected={this.state.fecha}onChange={this.onChange}/>
            <button className="boton  icon-ic_calendar " onClick={()=>this.mostrarFecha(this.state.fecha)}>  </button>
        </div>
        </div>
      </div>
      </>
    )
  }
}
export default DateTime;