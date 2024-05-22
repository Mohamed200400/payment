import React from "react";
import { apple,google,bill } from "../image";
const Payment = ()=>{

    return (
        <div className="payment">
            <div className="payment-text">
                <h1>Easily control your billing & invoicing.</h1>
                <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                <div className="img">
                <img src={apple} alt="sd"/>
                <img src={google} alt="sd"/>
                </div>
            </div>
            <div className="payment-img">
                <img src={bill} alt='kfvj' />
            </div>
        </div>

    )
}
export default Payment