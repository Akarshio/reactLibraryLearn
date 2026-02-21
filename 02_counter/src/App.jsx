import {useState } from "react";



function App() {

    let [ counter , setCounter] = useState(0)
    const increaseCount = () => {


        if ( counter < 20 || counter <= 0 ){

            setCounter(counter + 1)
        }else{
            setCounter(counter)
        }

    }
    const decreaseCount =  () => {
        if ( counter === 0 ){

            setCounter(counter )
        }else{
            setCounter(counter - 1)
        }

    }



  return (
    <>
        <h1> Count {counter} </h1>
        <button onClick={increaseCount}> Increase count</button>
        <br/>
        <button onClick={decreaseCount}>Decrease count</button>
    </>
  )
}

export default App
