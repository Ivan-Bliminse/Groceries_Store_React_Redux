import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="item2">
            <div className='navbar'>
                <ul>
                    <li> <Link to='/food' className="links">Food</Link></li>
                    <li> <Link to='/drink' className="links">Drinks</Link></li>
                    <li> <Link to='/cloth' className="links">Cloth</Link></li>
                    <li> <Link to='/sport' className="links">Sport</Link></li>
                    <li> <Link to='/plantandflowers' className="links">Plant / Flowers </Link></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;