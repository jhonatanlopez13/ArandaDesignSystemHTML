import React, { Component, useState } from 'react';
import "./module.css/style.css";

class Esqueleton extends Component{
    render(){
        return(
            <>
                <div className="skeleton-wrapper animate-pulse">
                    <div className="skeleton animate-pulse">
                        {/* <div className="skeleton-incicator animate-pulse"></div> */}
                    </div>                    
                </div>


                <div className="skeleton-wrapper1 animate-pulse">
                    <div className="skeleton1 animate-pulse">
                        {/* <div className="skeleton-incicator1 animate-pulse"></div> */}
                    </div>                    
                </div>


                <div className="skeleton-wrapper1-2 animate-pulse">
                    <div className="skeleton1-2 animate-pulse">
                        {/* <div className="skeleton-incicator1-2 animate-pulse"></div> */}
                    </div>                    
                </div>



                <div className="skeleton-wrapper1-3 animate-pulse">
                    <div className="skeleton1-3 animate-pulse">
                        {/* <div className="skeleton-incicator1-3 animate-pulse"></div> */}
                    </div>                    
                </div>



       

                <div className="skeleton-wrapper1-4 animate-pulse">
                    <div className="skeleton1-4 animate-pulse">
                        {/* <div className="skeleton-incicator1-4 animate-pulse"></div> */}
                    </div>                    
                </div>

               

        
            <div className="skeleton-wrapper2 animate-pulse">
                    <div className="skeleton2 animate-pulse">
                        {/* <div className="skeleton-incicator2 animate-pulse"></div> */}
                    </div>                    
             </div>
      
      

             <div className="skeleton-wrapper3 animate-pulse">
                    <div className="skeleton3 animate-pulse">
                        {/* <div className="skeleton-incicator3 animate-pulse"></div> */}
                    </div>                    
             </div>
      
                

             <div className="skeleton-wrapper4 animate-pulse">
                    <div className="skeleton4 animate-pulse">
                        {/* <div className="skeleton-incicator4 animate-pulse"></div> */}
                    </div>                    
            </div>


            <div className="skeleton-wrapper5 animate-pulse">
                    <div className="skeleton5 animate-pulse">
                        {/* <div className="skeleton-incicator5 animate-pulse"></div> */}
                    </div>                    
            </div>

            <div className="skeleton-wrapper6 animate-pulse">
                    <div className="skeleton6 animate-pulse">
                        {/* <div className="skeleton-incicator6 animate-pulse"></div> */}
                    </div>                    
            </div>
           
            <div className="skeleton-wrapper7 animate-pulse">
                    <div className="skeleton7 animate-pulse">
                        {/* <div className="skeleton-incicator6 animate-pulse"></div> */}
                    </div>                    
            </div>
           
            </>
        )
    }
}
export default Esqueleton;