import React from "react";
import {clients} from "../constants"

const Companies = ()=>{
    return (
        <div className="companies">
            {clients.map((el,id)=>
            <div key={id} className="companie"><img src={el.logo} alt="dkflvd" /></div>
        
            )}
            
        </div>
        
    )
}
export default Companies;