import logo from '../images/Frame 2 1.png'
import '../../index.css'

 export default function Nav(){
    return(
        <div className= "Nav-fa">
            <div className= "logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className= "routing">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>


        </div>
    )
}

