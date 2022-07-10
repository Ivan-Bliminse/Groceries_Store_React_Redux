import { useDispatch, useSelector } from 'react-redux';
import cart from './../../img/cart.svg'
import chicken from './../../img/food/meat/chicken.svg'
import pork from './../../img/food/meat/pork.svg'
import beef from './../../img/food/meat/beef.svg'
import falafel from './../../img/food/meat/falafel.png'
import firework from './../../img/GIF/firework.gif'
import { useState } from 'react';

const Cart = () => {

    const [secret, setSecret] = useState('')
    const toggle = () => {
        if (secret === 'HAKUNA-MATATA') {
            return true
        }
    }
    const price = useSelector(state => state.price)
    const dispatch = useDispatch()

    const amountChicken = useSelector(state => state.amountChicken)
    const amountPork = useSelector(state => state.amountPork)
    const amountBeef = useSelector(state => state.amountBeef)
    const amountFalafel = useSelector(state => state.amountFalafel)

    const resetCart = () => {
        dispatch({ type: 'RESET', payload: 0 })
    }

    const deleteChicken = () => {
        dispatch({ type: 'DELETE_CHICKEN', payload: 1, amount: 1 })
    }
    const deletePork = () => {
        dispatch({ type: 'DELETE_PORK', payload: 2, amount: 1 })
    }
    const deleteBeef = () => {
        dispatch({ type: 'DELETE_BEEF', payload: 5, amount: 1 })
    }
    const deleteFalafel = () => {
        dispatch({ type: 'DELETE_FALAFEL', payload: 2.5, amount: 1 })
    }


    const chickenImg = <img src={chicken} alt="" className="cart-food" />
    const porkImg = <img src={pork} alt="" className="cart-food" />
    const beefImg = <img src={beef} alt="" className="cart-food" />
    const falafelImg = <img src={falafel} alt="" className="cart-food" />


    const deleteChickenButton = <span onClick={() => deleteChicken()} style={{ color: 'red', cursor: 'pointer' }}>X</span>;
    const deletePorkButton = <span onClick={() => deletePork()} style={{ color: 'red', cursor: 'pointer' }}>X</span>;
    const deleteBeefButton = <span onClick={() => deleteBeef()} style={{ color: 'red', cursor: 'pointer' }}>X</span>;
    const deleteFalafelButton = <span onClick={() => deleteFalafel()} style={{ color: 'red', cursor: 'pointer' }}>X</span>;



    return (
        <div className="item4">
            <div>
                <p className='cart-text'><img src={cart} alt="cart" className='cart' /> Your Cart:</p>
                <div className='cart-choise'>
                    {amountChicken >= 1 && <div> {chickenImg} Chicken x {amountChicken} {deleteChickenButton} </div>}
                    {amountPork >= 1 && <div> {porkImg} Pork x {amountPork} {deletePorkButton} </div>}
                    {amountBeef >= 1 && <div> {beefImg} Beef x {amountBeef} {deleteBeefButton} </div>}
                    {amountFalafel >= 1 && <div> {falafelImg} Falafel x {amountFalafel} {deleteFalafelButton} </div>}

                    {!toggle() && <span> Price: {price} $ <p className='resetCart' style={{ cursor: 'pointer' }} onClick={() => resetCart()}>Reset your cart </p></span>}
                    <br />


                </div>

                <div className='discount'> {toggle() && <span><span>Congratulations! You found the secret phrase! You can take everythink you want - for FREE my Friend!
                </span>
                    <div><img src={firework} className='fire-work' alt='firework' /></div></span>}</div>

            </div>
            <div className="discount">
                <input type="text"
                    placeholder='SECRET PHRASE!'
                    value={secret}
                    onChange={(e) => setSecret(e.target.value)}
                    className='inputText' />

            </div>
        </div>

    );
}

export default Cart;