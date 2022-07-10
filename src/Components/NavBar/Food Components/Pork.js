import { Link } from 'react-router-dom';
import pork from './../../../img/food/meat/pork.svg'
import arrowLeft from './../../../img/arrow left.svg'
import { useDispatch, useSelector } from 'react-redux';

const Pork = () => {

    const dispatch = useDispatch()
    const amountPork = useSelector(state => state.amountPork)
    const addPork = () => {
        dispatch({ type: 'PORK', payload: 2, amount: 1 })
    }

    return (
        <div>
            <span className='food-blog'>
                <img src={pork} alt="" className="food-description" />
            </span>
            <span className='text-food'>
                <p><strong>This is description about pork:</strong></p>
                <p>This is the freshest pork in a world</p>
                <p>You will enjoy every meal with this pork</p>
                <p>Price: <strong>2$</strong> <button
                    onClick={() => addPork()}
                    className='cart-button'>Add to Cart
                    {amountPork >= 1 && <span>x {amountPork}</span>}
                </button> </p>
                <Link to='/food/meat'><img src={arrowLeft}
                    alt="arrowLeft" className='arrowLeft' /></Link>

            </span>
        </div>
    );
}

export default Pork;