import React, {useState, useEffect} from "react";
import "./module.css/style.css";

export default function Progress ({percent}) {


  
  const [anchura, setAnchura] = useState(0);
  const [color, setColor] = useState('green');
  const [color1, setcolor1] =useState('green1');

  useEffect(() => {
    setAnchura(percent);
    if(percent > 59 ){
      setColor('green')
    }
    else{
      setColor('red')
    }
  }, [percent]);
      
    useEffect(()=>{
      setAnchura(percent);
      if (percent>59){
        setcolor1('green1')
      }else{
        setcolor1('red1')
      }
    }, [percent]);




  return(
    <div className="contendor-padre">
      <div className="h1">
  <h1  className={'ProgressBar1 '+color1} style={{width: anchura + "%" }}>{percent}</h1>
      </div>
      <span className={'ProgressBar1 '+color} style={{width: anchura + "%" }}></span>
    </div>
  );

 
}


