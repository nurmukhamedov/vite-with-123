import { useState } from 'react'
import './App.css'
import ExampleToDoReducer from './Lesson58/ExampleToDoReducer';


function App() {

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increaseCount}>Plus</button>
      <button onClick={decreaseCount}>Minus</button>

      <h3>Reducer example</h3>
      <ExampleToDoReducer />
    </>
  )
}

export default App
