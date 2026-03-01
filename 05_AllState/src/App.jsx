import { useEffect, useState} from "react";


function App() {

    // useState with number , string , object & array  Component ke andar data store karne ke liye use hota hai.

    // const [ count , setCount ] = useState(0);
    // const incrementCount = () => {
    //     setCount(  prev => prev + 1);
    //     setCount(  prev => prev + 1);
    // }

    // const [ name , setName] = useState("Akarsh")
    // const nameChanger = () => {
    //       setName("Aryan")
    // }

    // const [ person , setPerson]   = useState({ name: "Akarsh", age: 18 });
    // const ageChanger = () => {
    //     if (    person.age < 70   ){
    //         setPerson( { ...person , age: person.age + 1 })
    //     }else{
    //         console.log("Age limit")
    //     }
    //
    //
    // }

    // const [ score , setScore  ] = useState([])
    // const scoreChanger = () => {
    //     setScore( [ ...score, score.length ] )
    // }

    // useEffect ---> Component render hone ke baad automatic code run karta hai

    const [ item , setItem] = useState([]);
    const [quantity , setQuantity] = useState(0);


        useEffect( () => {
            setItem([ "Pizza"])

        } ,[  quantity ])

    const quantityUpdate = () => {
            setQuantity( prev => prev + 1)
   }

  return (
    <>
        <h1> my score is {item} & quantity {quantity}</h1>
        <button onClick={ quantityUpdate }> Button </button>

    </>
  )
}

export default App



