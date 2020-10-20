import { green } from "@material-ui/core/colors";
import React, {useState, useEffect} from "react";
import "./module.css/style.css";

export default function Progress ({percent}) {


  
  const [anchura, setAnchura] = useState(0);
  const [color, setColor] = useState('green');


  useEffect(() => {
    setAnchura(percent);
    if(percent>59){
      setColor('green');
    }
    else{
      setColor('red');
    }
  }, [percent]);





  return(
    <div className="contendor-padre">
      {/* <ProgressBar anchura={ anchura } /> */}
      <span className={'ProgressBar1 '+color} style={{width: anchura + "%" }}></span>
    </div>
  );
}


