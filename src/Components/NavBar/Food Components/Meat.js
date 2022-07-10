import { Link } from 'react-router-dom';
import chicken from './../../../img/food/meat/chicken.svg'
import pork from './../../../img/food/meat/pork.svg'
import beef from './../../../img/food/meat/beef.svg'
import falafel from './../../../img/food/meat/falafel.png'
import arrowLeft from './../../../img/arrow left.svg'

const Meat = () => {
    return (
        <div>
            <p className="meat-component">Here you will find the freshest meat </p>

            <div className="food-group">
                <span><Link to='/food/meat/chicken'><img src={chicken} alt="chicken" className="food-category" /></Link></span>
                <span><Link to='/food/meat/pork'><img src={pork} alt="pork" className="food-category" /></Link></span>
                <span><Link to='/food/meat/beef'><img src={beef} alt="beef" className="food-category" /></Link></span>
                <span><Link to='/food/meat/falafel'><img src={falafel} alt="falafel" className="food-category" /></Link></span>
            </div>
            <div>
                <Link to='/food'><img src={arrowLeft} alt="arrowLeft" className='arrowLeft' /></Link>
            </div>
        </div>
    );
}

export default Meat;