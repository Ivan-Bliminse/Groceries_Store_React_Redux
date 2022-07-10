
//react-router-dom@5
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Components
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Cloth from './Components/NavBar/Cloth';
import Drinks from './Components/NavBar/Drinks';

// Food Components import
import Food from './Components/NavBar/Food';
import Chicken from "./Components/NavBar/Food Components/Chicken";
import Pork from "./Components/NavBar/Food Components/Pork";
import Beef from "./Components/NavBar/Food Components/Beef";
import Falafel from "./Components/NavBar/Food Components/Falafel";
import Meat from "./Components/NavBar/Food Components/Meat";



import NavBar from './Components/NavBar/NavBar';
import PlantsAndFlowers from './Components/NavBar/PlantsAndFlowers';
import Sport from './Components/NavBar/Sport';


function App() {
  return (
    <BrowserRouter>
      <div>
        <div className='grid-container'>

          {/* Header  */}
          <Header />

          {/* Navigation bar // sidebar */}
          <NavBar />

          {/* Main content */}
          < Routes>
            <Route exact path='/' element={<Main />} />

            {/* Food components */}
            <Route path='/food' element={<Food />} />
            <Route path='/food/meat' element={<Meat />} />
            <Route path='/food/meat/chicken' element={<Chicken />} />
            <Route path='/food/meat/pork' element={<Pork />} />
            <Route path='/food/meat/beef' element={<Beef />} />
            <Route path='/food/meat/falafel' element={<Falafel />} />


            <Route path='/drink' element={<Drinks />} />
            <Route path='/cloth' element={<Cloth />} />
            <Route path='/sport' element={<Sport />} />
            <Route path='/plantandflowers' element={<PlantsAndFlowers />} />

          </ Routes>

          {/* Cart */}
          <Cart />

          {/* Footer */}
          <Footer />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;