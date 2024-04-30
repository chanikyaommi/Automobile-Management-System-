import React from 'react';

import './Dashboard.css'; // Import the CSS file
import AppBar from './Appbardashboard.js';
import harrier from './imgaes/harrier.jpg';
import innova from './imgaes/innova.jpg';
import maruti from './imgaes/Waganor.jpg'; 
import swift from './imgaes/swift1.jpg'; 
import thar from './imgaes/Thar.jpeg'; 
import fortuner from './imgaes/fortuner.jpeg';
import tiago from './imgaes/tiago.jpeg';
import amaze from './imgaes/amaze.jpeg';  
import TeslaModel3 from '../src/imgaes/TeslaModel3.jpg';  
import ToyotaCorolla from '../src/imgaes/ToyotaCorolla.jpg';  
import ChevroletCaptiva from '../src/imgaes/ChevroletCaptiva.jpg';  
import LincolnNautilus from '../src/imgaes/LincolnNautilus.jpg';  
import ToyotaLandCruiser from '../src/imgaes/ToyotaLandCruiser.jpg'; 
import VolkswagenTiguan from '../src/imgaes/VolkswagenTiguan.jpg';  
import car8 from '../src/imgaes/car8.jpg';  
import car10 from '../src/imgaes/car10.jpg';  
import car11 from '../src/imgaes/car11.jpg';  
import car12 from '../src/imgaes/car12.jpg';  
import car13 from '../src/imgaes/car13.jpg';  
import car14 from '../src/imgaes/car14.jpg';  
import car15 from '../src/imgaes/car15.jpg';  
import car16 from '../src/imgaes/car16.jpg';  








import { Link } from 'react-router-dom';
// import React from 'react';

function Home() {
  return (
    
    <div>
      <div className="dashboard-container"> 
        <AppBar position="static">
      
        </AppBar>
      </div>

      <div className='body'>
      <div className="services-section">
                        <Link to="/services">
                            <button className="Button">Services</button>
                        </Link>
                    </div>

                    <div className="sell-section">
                    <Link to="/sell">
                            <button className="Button">Sell</button>
                        </Link>
                    </div>

        <div className='Cargrid'>
          <div className='image-container'>
            <img className='image_1' src={harrier} alt="Description of your image"/>
            <p className='Passage_content'>Tata Harrier <br/>
            Price -₹15,00,000<br/>
             Mileage - 22km<br/></p>
            <Link to="/selected-car/harrier"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>


          <div className='image-container'>
            <img className='image_1' src={TeslaModel3} alt="Description of your image"/>
            <p className='Passage_content'>Tesla Model 3 <br/>
            Price -₹38,00,000<br/>
            Mileage - 82KWH<br/></p>
            <Link to="/selected-car/TeslaModel3"> {/* Link to SelectedCar component with car name parameter */}
          <button  className='Button'>Buy</button>
        </Link>
          </div>


          <div className='image-container'>
            <img className='image_1' src={ToyotaCorolla} alt="Description of your image"/>
            <p  className='Passage_content'>Toyota Corolla<br/>
            Price -₹16,00,000<br/>
            Mileage - 20km<br/></p>
            <Link to="/selected-car/ToyotaCorolla"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>

          <div className='image-container'>
            <img className='image_1' src={ChevroletCaptiva} alt="Description of your image"/>
            <p className='Passage_content'>Chevrolet Captiva <br/>
            Price -₹18,00,000<br/>
            Mileage - 19km<br/></p>
            <Link to="/selected-car/ChevroletCaptiva"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>




          <div className='image-container'>
            <img className='image_1' src={LincolnNautilus} alt="Description of your image"/>
            <p className='Passage_content'>Lincoln Nautilus <br/>
            Price -₹22,00,000<br/>
            Mileage - 12km<br/></p>
            <Link to="/selected-car/LincolnNautilus"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>


          <div className='image-container'>
            <img className='image_1' src={ToyotaLandCruiser} alt="Description of your image"/>
            <p className='Passage_content'>Toyota Land Cruiser  <br/>
            Price -₹25,00,000<br/>
            Mileage - 9km<br/></p>
            <Link to="/selected-car/ToyotaLandCruiser"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>


          <div className='image-container'>
            <img className='image_1' src={VolkswagenTiguan} alt="Description of your image"/>
            <p className='Passage_content'>Volkswagen Tiguan <br/>
            Price -₹19,00,000<br/>
            Mileage - 17km<br/></p>
            <Link to="/selected-car/VolkswagenTiguan"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>



          <div className='image-container'>
            <img className='image_1' src={car8} alt="Description of your image"/>
            <p className='Passage_content'>Nissan Kicks <br/>
            Price -₹15,00,000<br/>
            Mileage - 17km<br/></p>
            <Link to="/selected-car/car8"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>


         


          <div className='image-container'>
            <img className='image_1' src={car10} alt="Description of your image"/>
            <p className='Passage_content'>Jac Js6 <br/>
            Price -₹13,00,000<br/>
            Mileage - 21Km<br/></p>
            <Link to="/selected-car/car10"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>


          <div className='image-container'>
            <img className='image_1' src={car11} alt="Description of your image"/>
            <p className='Passage_content'>Jeep Wrangler JL <br/>
            Price -₹21,00,000<br/>
            Mileage - 18km<br/></p>
            <Link to="/selected-car/car11"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>

          <div className='image-container'>
            <img className='image_1' src={car12} alt="Description of your image"/>
            <p className='Passage_content'>MG Hector <br/>
            Price -₹17,00,000<br/>
            Mileage - 22km<br/></p>
            <Link to="/selected-car/car12"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>


          <div className='image-container'>
            <img className='image_1' src={car13} alt="Description of your image"/>
            <p className='Passage_content'>Ford Mustang <br/>
            Price -₹80,00,000<br/>
            Mileage - 12km<br/></p>
            <Link to="/selected-car/car13"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>


          <div className='image-container'>
            <img className='image_1' src={car14} alt="Description of your image"/>
            <p className='Passage_content'>Mitsubishi . Attrage <br/>
            Price -₹24,00,000<br/>
            Mileage - 18<br/></p>
            <Link to="/selected-car/car14"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>



          <div className='image-container'>
            <img className='image_1' src={car15} alt="Description of your image"/>
            <p className='Passage_content'>Audi Q5 <br/>
            Price -₹45,00,000<br/>
            Mileage - 22km<br/></p>
            <Link to="/selected-car/car15"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>



          <div className='image-container'>
            <img className='image_1' src={car16} alt="Description of your image"/>
            <p className='Passage_content'>Toyota corolla <br/>
            Price -₹17,00,000<br/>
            Mileage - 22km<br/></p>
            <Link to="/selected-car/car16"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>


          <div className='image-container'>
            <img className='image_1' src={innova} alt="Description of your image"/>
            <p className='Passage_content'>Innova<br/>
            Price -₹18,00,000 <br/>
            Mileage - 22km<br/></p>
            <Link to="/selected-car/innova"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>
          <div className='image-container'>
            <img className='image_1' src={maruti} alt="Description of your image"/>
            <p className='Passage_content'>Waganor<br/>
            Price -₹4,00,000 <br/>
            Mileage - 18-20km<br/></p>
            <Link to="/selected-car/maruti"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>
          <div className='image-container'>
            <img className='image_1' src={swift} alt="Description of your image"/>
            <p className='Passage_content'>Swift<br/>
            Price -₹6,00,000 <br/>
            Mileage - 18-22km<br/></p>
            <Link to="/selected-car/swift"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>

          <div className='image-container'>
            <img className='image_1' src={thar} alt="Description of your image"/>
            <p className='Passage_content'>Thar <br/>
            Price -₹18,00,000<br/>
            Mileage - 18km<br/></p>
            <Link to="/selected-car/thar"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>
          <div className='image-container'>
            <img className='image_1' src={fortuner} alt="Description of your image"/>
            <p className='Passage_content'>Fortuner <br/>
            Price -₹56,00,000<br/>
            Mileage - 12km<br/></p>
            <Link to="/selected-car/fortuner"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>

          <div className='image-container'>
            <img className='image_1' src={tiago} alt="Description of your image"/>
            <p className='Passage_content'>Tiago <br/>
            Price -₹7,00,000<br/>
            Mileage - 22km<br/></p>
            <Link to="/selected-car/tiago"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div><div className='image-container'>
            <img className='image_1' src={amaze} alt="Description of your image"/>
            <p className='Passage_content'>Amaze <br/>
            Price -₹9,00,000<br/>
            Mileage - 19km<br/></p>
            
            <Link to="/selected-car/amaze"> {/* Link to SelectedCar component with car name parameter */}
          <button className='Button'>Buy</button>
        </Link>
          </div>


          


        </div>








        <footer className="footer" style={{ backgroundColor: '#1976d2', color: 'white' }}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Get to Know Us</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
              
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect with Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>


      </div>
    </div>
  );
}

export default Home;