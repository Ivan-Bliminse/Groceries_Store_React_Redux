import { Link } from "react-router-dom";
import meat from './../../img/food/meat/meat.svg'
import dairy from './../../img/food/dairy and milk/dairy.svg'
import fruits from './../../img/food/fruits/fruits.svg'
import vegetables from './../../img/food/vegetables/vegetable.svg'
import fish from './../../img/fish.svg'



const Food = () => {
    return (
        <div>
            <p className="category-title">Choose Category</p>
            <div className="food-group">
                <span><Link to='/food/meat'><img src={meat} alt="meat" className="food-category" /></Link></span>
                <span><Link to=''><img src={dairy} alt="dairy" className="food-category" /></Link></span>
                <span><Link to=''><img src={fruits} alt="fruits" className="food-category" /></Link></span>
                <span><Link to=''><img src={vegetables} alt="vegetables" className="food-category" /></Link></span>
                <span><Link to=''><img src={fish} alt="fish" className="food-category" /></Link></span>

            </div>
        </div>
    );
}

export default Food;