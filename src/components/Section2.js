import React from "react";
import { features } from "../constants";

const Section2 =()=>{
    return (
        <div className="section2">
            <div className="text">
                <h1>You do the business, we’ll handle the money.</h1>
                <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <button>Get Started</button>
            </div>
            <div className="reward">
                {features.map((el)=>
                <div key={el.id} className="reward-item" >
                    <img src={el.icon} alt="dfhkdf"/>
                    <h3>{el.title}</h3>
                    <p>{el.content} </p>
                </div>
                )}
            </div>
        </div>

    )

}
export default Section2