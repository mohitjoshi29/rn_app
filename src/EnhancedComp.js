import React,{useState} from 'react'
const Hoc=NewComp=>{
function EnhancedComp() {
    const [count,setCount]= useState(0);
    const increment=()=>{
        setCount(count+1);
    }
  return (
    <div>
        <NewComp count={count} incrementfun={increment}/>
    </div>
  )
}
return EnhancedComp;
}
export default Hoc;
