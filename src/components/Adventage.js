import React from 'react'
import { stats } from '../constants'

const Adventage = () => {
  return (
    <div className='adventage'>
        {stats.map((el)=>
            <div key={el.id} className='adventage-item'>
                <div className='nb'> {el.value} </div>
                <div className='title'>{el.title}</div>
            </div>)
        }
        
        
    </div>
    )
}

    
export default Adventage;