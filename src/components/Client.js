import React from "react";
import { card } from "../image";

const Client =()=>{
    return (
        <div className="client">
            <div className="client-text">
                <h1>Find a better card deal in few easy steps.</h1>
                <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                <button>Get Started</button>
            </div>
            <div className="client-img">
                <img src={card} alt="dfjvb" />
            </div>
        </div>

    )

}
export default Client 