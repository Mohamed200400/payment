import React from "react";
import Card from "./Card";

const User = () => {
    return (
        <div className="user-section">
            <div className="user-text">
                <div><p className="p1">What people are saying about us</p></div>
                
                <div><p className="p2">Everything you need to accept card payments and grow your business anywhere on the planet.</p></div>
            </div>
            <div className="users">
                <Card />
            </div>
        </div>
    )
}

export default User;