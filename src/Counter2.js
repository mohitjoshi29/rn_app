import React,{useState} from 'react'
import Hoc from './EnhancedComp'

function Counter2(props) {
    const [count,incrementfun]=useState()
  return (
    <div>
        <button className='btn btn-success' onClick={props.incrementfun}>increment</button>
        count:{props.count} times
      
    </div>
  )
}
export default Hoc(Counter2);
