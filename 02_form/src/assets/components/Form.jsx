import svg from '../images/Service 24_7-pana 1.svg'
import '../../index.css'

export default function Form(){
    return(
        <>
           <div className= "text">
               <h1>CONTACT US</h1>
               <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
           </div>
            <div className="root-form">
                 <div className= "btn">
                     <button>VIA SUPPORT CHAT</button>
                     <button>VIA CALL</button>
                 </div>
                 <div className= "btn-email"  >
                     <button>VIA EMAIL FORM</button>
                 </div>
                 <div className= "form">
                     <form className= "form-items">
                         <label >Name</label>
                         <input type="text" id="name" name="name" placeholder="Name"/><br/>
                         <label >E-Mail</label>
                         <input type="email" id="email" name="email" placeholder="E-Mail"/><br/>
                         <label >TEXT</label>
                         <textarea  id="text" name="text" rows="4"  placeholder="TEXT"> < /textarea>

                     </form>
                 </div>
                <div className='btn-submit' >
                    <button type="submit">SUBMIT</button>
                </div>

                <div className= "svg-img">
                    <img src={svg} alt="svg" />
                </div>
            </div>
        </>
    )
}

