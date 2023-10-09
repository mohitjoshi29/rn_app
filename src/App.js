import React from 'react'
import Counter1 from './Counter1'
import Counter2 from './Counter2'
import Portal from './Portal';

function App() {
  return (
    <div>
      <br/>
      <Portal/>
      <h5 className='h5'>portal (child-root)</h5>
      <br/>
      <hr/>
      <br/>
      <h1 className='h1'>higher order component...</h1>
      <br/>
      <Counter1/><br/>
      <hr/>
      <br/>
      <Counter2/>
    </div>
  )
}
export default App;