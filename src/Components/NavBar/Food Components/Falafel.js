import { Link } from 'react-router-dom';
import falafel from './../../../img/food/meat/falafel.png'
import arrowLeft from './../../../img/arrow left.svg'
import { useDispatch, useSelector } from 'react-redux';

const Falafel = () => {
    const dispatch = useDispatch()
    const amountFalafel = useSelector(state => state.amountFalafel)
    const addFalafel = () => {
        dispatch({ type: 'FALAFEL', payload: 2.5, amount: 1 })
    }

    return (
        <div>
            <span className='food-blog'>
                <img src={falafel} alt="" className="food-description" />
            </span>
            <span className='text-food'>
                <p><strong>This is description about falafel:</strong></p>
                <p>This is the freshest falafel in a world</p>
                <p>You will enjoy every meal with this falafel</p>
                <p>Price: <strong>2.5$</strong> <button className='cart-button'
                    onClick={() => addFalafel()} >
                    Add to Cart {amountFalafel >= 1 && <span>x {amountFalafel} </span>}</button></p>
                <Link to='/food/meat'><img src={arrowLeft} alt="arrowLeft" className='arrowLeft' /></Link>
            </span>
        </div>
    );
}

export default Falafel;