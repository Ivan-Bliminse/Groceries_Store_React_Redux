import { Link } from 'react-router-dom';
import chicken from './../../../img/food/meat/chicken.svg'
import arrowLeft from './../../../img/arrow left.svg'
import { useDispatch, useSelector } from 'react-redux';


const Chicken = () => {

    const dispatch = useDispatch()

    const amountChicken = useSelector(state => state.amountChicken)




    const addChicken = () => {
        dispatch({ type: 'CHICKEN', payload: 1, amount: 1 })
    }
    return (
        <div>
            <span className='food-blog'>
                <img src={chicken} alt="" className="food-description" />
            </span>
            <span className='text-food'>
                <p><strong>This is description about chicken:</strong></p>
                <p>This is the freshest chicken in a world</p>
                <p>You will enjoy every meal with this chicken</p>

                <p>Price: <strong>1$</strong> <button
                    className='cart-button'
                    onClick={() => addChicken()}
                >Add to Cart {amountChicken >= 1 && <span>x {amountChicken}</span>}</button></p>
                {/* 

                <button onClick={() => addPrice()}>Add to Redux store</button>
                <button onClick={() => takePrice()}>Take from Redux store</button>
                <div style={{ fontSize: '40px', fontWeight: "bold" }}>{price}$</div> */}



                <Link to='/food/meat'><img src={arrowLeft} alt="arrowLeft" className='arrowLeft' /></Link>
            </span>
        </div>
    );
}

export default Chicken;