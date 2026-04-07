import '../../index.css';
import logo from '../images/brand_logo.png';


export default function Nav(){
    return (
        <div>

            <nav className="nav-bar">
                <div className= "logo">
                    <img src={logo} className="logo" alt="logo"  />
                </div>
                <div className = "nav-menu" >
                    <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Connect</a></li>
                    </ul>
                </div>

                <div className="btn">
                    <button>Login</button>
                </div>
            </nav>
        </div>
    )
}