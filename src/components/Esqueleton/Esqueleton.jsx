import React, { Component, useState } from 'react';
import "./module.css/style.css";

class Esqueleton extends Component{
    render(){
        return(
            <>
                <div className="skeleton-wrapper">
                    <div className="skeleton">
                        <div className="skeleton-incicator"></div>
                    </div>                    
                </div>


                <div className="skeleton-wrapper1">
                    <div className="skeleton1">
                        <div className="skeleton-incicator1"></div>
                    </div>                    
                </div>


                <div className="skeleton-wrapper1-2">
                    <div className="skeleton1-2">
                        <div className="skeleton-incicator1-2"></div>
                    </div>                    
                </div>



                <div className="skeleton-wrapper1-3">
                    <div className="skeleton1-3">
                        <div className="skeleton-incicator1-3"></div>
                    </div>                    
                </div>



       

                <div className="skeleton-wrapper1-4">
                    <div className="skeleton1-4">
                        <div className="skeleton-incicator1-4"></div>
                    </div>                    
                </div>

               

        
            <div className="skeleton-wrapper2">
                    <div className="skeleton2">
                        <div className="skeleton-incicator2"></div>
                    </div>                    
             </div>
      
      

             <div className="skeleton-wrapper3">
                    <div className="skeleton3">
                        <div className="skeleton-incicator3"></div>
                    </div>                    
             </div>
      
                

             <div className="skeleton-wrapper4">
                    <div className="skeleton4">
                        <div className="skeleton-incicator4"></div>
                    </div>                    
            </div>


            <div className="skeleton-wrapper5">
                    <div className="skeleton5">
                        <div className="skeleton-incicator5"></div>
                    </div>                    
            </div>

            <div className="skeleton-wrapper6">
                    <div className="skeleton6">
                        <div className="skeleton-incicator6"></div>
                    </div>                    
            </div>
           

            </>
        )
    }
}
export default Esqueleton;