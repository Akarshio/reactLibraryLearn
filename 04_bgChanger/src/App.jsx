import {useState}  from "react";



function App() {
   const [color , setColor] = useState("olive")

  return (


        <div className="w-full h-screen  duration-200 " style={{backgroundColor: color}}>

          <div  className= " fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2">
              <div  className= " flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl ">
              <button  className=" outline-none px-4  rounded-full text-white bg-red-400" onClick={() => setColor('red')}  style={{backgroundColor: 'red'}}>
                        Red
              </button>
                  <button  className=" outline-none px-4  rounded-full text-white bg-blue-700" onClick={() => setColor('blue')}  style={{backgroundColor: 'blue'}}>
                      Red
                  </button>
                  <button  className=" outline-none px-4  rounded-full text-white bg-black" onClick={() => setColor('black')}  style={{backgroundColor: 'black'}}>
                      Red
                  </button>


          </div>
          </div>

        </div>


  )

}

export default App
