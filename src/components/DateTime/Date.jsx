import React, { Component} from "react";
import DatePicker, {registerLocale}  from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./module.css/style.css";
import es from 'date-fns/locale/es';

registerLocale ("es", es);


class DateTime extends Component{
  state={
    fecha:new Date()
  }
  onChange=fecha=>{
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
            <DatePicker className="border-gray border-2 rounded px-6 py-1"  selected={this.state.fecha} onChange={this.onChange} locale="es" dateFormat="dd-MM-yyyy"
             />
             <button className="boton  icon-ic_calendar " onClick={()=>this.mostrarFecha(this.state.fecha)}>  </button>
        </div>
        </div>
      </div>
      </>
    )
  }
}
export default DateTime;
