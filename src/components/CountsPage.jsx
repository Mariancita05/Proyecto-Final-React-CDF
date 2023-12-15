import React from 'react'
import '../views/Card.css'

const CountsPage = ({ count, handleSuma, handleResta }) => {
   
    return (
        <div >    
          <h3 className='count'>{count}</h3>
          <button className='suma' onClick={handleSuma}>+</button>
          <button className='resta' onClick={handleResta} > - </button>    
        </div>    
      );
}

export default CountsPage
