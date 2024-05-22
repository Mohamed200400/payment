import React from "react";
import quotes from "../image/quotes.svg"
import { feedback } from "../constants";



const Card = () =>{
    return (
    <>
        {feedback.map((el)=>
            <div key={el.id} className="user" >
                <img src={quotes} alt='dfvdf' />
                <p className="p">{el.content}</p>
                <footer>
                    <img src={el.img} alt="jdfdljfvjd" />
                    <div>
                        <p className="name">{el.name}</p>
                        <p className="title"> {el.title}</p>
                    </div>
                </footer>
            </div>
        )}
    </>
    )
}
export default Card ;
