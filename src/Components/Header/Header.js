import { Link } from "react-router-dom";
import home from './../../img/home.svg'
const Header = () => {
    return (
        <div className="item1">
            <Link to='/'><img src={home} alt="homepage" className="home" /></Link>
            <p className='title'>A variety of household goods with worldwide delivery</p>


            <img src="https://puccinikitchens.co.uk/wp-content/uploads/2019/02/puccini-London-SE24-1900x600.jpg" alt="kitchen"
                className='kitchen-photo' />
        </div>
    );
}

export default Header;