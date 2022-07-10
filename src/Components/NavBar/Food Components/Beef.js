import { Link } from 'react-router-dom';
import beef from './../../../img/food/meat/beef.svg'
import arrowLeft from './../../../img/arrow left.svg'
import { useDispatch, useSelector } from 'react-redux';


const Beef = () => {

    const dispatch = useDispatch()
    const amountBeef = useSelector(state => state.amountBeef)
    const addBeef = () => {
        dispatch({ type: 'BEEF', payload: 5, amount: 1 })
    }
    return (
        <div>
            <span className='food-blog'>
                <img src={beef} alt="" className="food-description" />
            </span>
            <span className='text-food'>
                <p><strong>This is description about beef:</strong></p>
                <p>This is the freshest beef in a world</p>
                <p>You will enjoy every meal with this beef</p>
                <p>Price: <strong>5$</strong> <button
                    onClick={() => addBeef()}
                    className='cart-button'>
                    Add to Cart   {amountBeef >= 1 && <span>x {amountBeef}</span>}</button></p>
                <Link to='/food/meat'><img src={arrowLeft} alt="arrowLeft" className='arrowLeft' /></Link>

            </span>
        </div>
    );
}

export default Beef;