import { useRef, useState} from "react";


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

   //  const [ item , setItem] = useState([]);
   //  const [quantity , setQuantity] = useState(0);
   //
   //
   //      useEffect( () => {
   //          setItem([ "Pizza"])
   //
   //      } ,[  quantity ])
   //
   //  const quantityUpdate = () => {
   //          setQuantity( prev => prev + 1)
   // }

    // useCallback --> dubara function create hone se bachata hai , while rerendering


    const infoRef = useRef(null);

    const handleEvent = () => {
        infoRef.current.focus();
        infoRef.current.select();
        navigator.clipboard.writeText(infoRef.current.value);
        alert("Text copied")
    }





  return (
    <>
        <input
            placeholder=" write what you want to copy "
            ref={infoRef} />


        <button onClick={handleEvent}>
            Copy
        </button>


        {/*<input ref={ infoRef}/>*/}
        {/*<h1> my score is {count} & quantity {count}</h1>*/}
        {/*<button onClick={ handleEvent }> Button </button>*/}
        {/*<button onClick={ incrementValue }> Button </button>*/}

    </>
  )
}

export default App



