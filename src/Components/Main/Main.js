// Images
import food from './../../img/food.svg';
import drink from './../../img/drink.svg';
import cloth from './../../img/cloth.svg';
import sport from './../../img/sport.svg';
import plant from './../../img/plant.svg';
import { useState } from 'react';


const Main = () => {

    const [foodA, setFood] = useState(0)
    const [drinkA, setDrink] = useState(0)
    const [clothA, setCloth] = useState(0)
    const [sportA, setSport] = useState(0)
    const [plantA, setPlant] = useState(0)
    const password = () => {
        if (foodA === 1 && drinkA === 1 && clothA === 1 && sportA === 1 && plantA === 1) {
            return true
        }
        return false
    }
    return (
        <div className="item3">

            <p className='description'>
                Here you will get goods for every taste, food , drinks and sporting goods, as well as plants and flowers for you and your home.
                <div className='svg'>
                    <img src={food} alt="" className='food' onClick={() => setFood(1)} />
                    <img src={drink} alt="" className='drink' onClick={() => setDrink(1)} />
                    <img src={cloth} alt="" className='cloth' onClick={() => setCloth(1)} />
                    <img src={sport} alt="" className='sport' onClick={() => setSport(1)} />
                    <img src={plant} alt="" className='plant' onClick={() => setPlant(1)} />
                    {password() && <p>HAKUNA-MATATA</p>}
                </div>
            </p>




            <section className="advantages">
                <h2 className='h2-border'>What makes us stand out from the competition?</h2>

                <ul className="advantages-list">
                    <li className='advantages-item'>We offer top quality products</li>
                    <li className='advantages-item'>Daily progress reports</li>
                    <li className='advantages-item'>We will give you the best choices</li>
                    <li className='advantages-item'>Free warranty service</li>
                    <li className='advantages-item'>Same day delivery</li>
                </ul>
            </section>

            <div className='advertisement'>
                Here could be your advertisement
            </div>


        </div>
    );
}

export default Main;