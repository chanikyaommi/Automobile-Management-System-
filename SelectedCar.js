import React from 'react';
import { useParams } from 'react-router-dom';
import harrier from './imgaes/harrier.jpg'; // Import the car images
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

import './SelectedCar.css';

function SelectedCar() {
    const { carName } = useParams();

    // Define a data structure to link car names to their respective images, prices, and mileages
    const carDetails = {
        harrier: {
            image: harrier,
            price: '₹15,00,000',
            mileage: '22 km',
        },
        innova: {
            image: innova,
            price: '₹18,00,000',
            mileage: '22 km',
        },
        waganor: {
            image: maruti,
            price: '₹4,00,000',
            mileage: '18-20 km',
        },
        swift: {
            image: swift,
            price: '₹6,00,000',
            mileage: '18-22 km',
        },
        thar: {
            image: thar,
            price: '₹18,00,000',
            mileage: '18 km',
        },
        fortuner: {
            image: fortuner,
            price: '₹56,00,000',
            mileage: '12 km',
        },
        tiago: {
            image: tiago,
            price: '₹7,00,000',
            mileage: '22 km',
        },
        amaze: {
            image: amaze,
            price: '₹9,00,000',
            mileage: '19 km',
        },
        TeslaModel3: {
            image: TeslaModel3,
            price: '₹38,00,000',
            mileage: '82 KWH',
        },
        ToyotaCorolla: {
            image: ToyotaCorolla,
            price: '₹16,00,000',
            mileage: '20 km',
        },
        ChevroletCaptiva: {
            image: ChevroletCaptiva,
            price: '₹18,00,000',
            mileage: '19 km',
        },
        LincolnNautilus: {
            image: LincolnNautilus,
            price: '₹22,00,000',
            mileage: '12 km',
        },
        ToyotaLandCruiser: {
            image: ToyotaLandCruiser,
            price: '₹25,00,000',
            mileage: '9 km',
        },
        VolkswagenTiguan: {
            image: VolkswagenTiguan,
            price: '₹19,00,000',
            mileage: '17 km',
        },
        car8: {
            image: car8,
            price: '₹15,00,000',
            mileage: '17 km',
        },
        car10: {
            image: car10,
            price: '₹13,00,000',
            mileage: '21 km',
        },
        car11: {
            image: car11,
            price: '₹21,00,000',
            mileage: '18 km',
        },
        car12: {
            image: car12,
            price: '₹17,00,000',
            mileage: '22 km',
        },
        car13: {
            image: car13,
            price: '₹80,00,000',
            mileage: '12 km',
        },
        car14: {
            image: car14,
            price: '₹24,00,000',
            mileage: '18 km',
        },
        car15: {
            image: car15,
            price: '₹45,00,000',
            mileage: '22 km',
        },
        car16: {
            image: car16,
            price: '₹17,00,000',
            mileage: '22 km',
        },
    };

    // Get the details of the selected car based on carName
    const selectedCar = carDetails[carName];

    if (!selectedCar) {
        return <p>Car not found.</p>;
    }

    return (
        <div>
            <h2 className='Selected_head'>Selected Car Details</h2>
            <div className='content-wrapper_1'>
                <div className='passagecontent_1'>
                    <h3>{carName}</h3>
                    <p>Price: {selectedCar.price}</p>
                    <p>Mileage: {selectedCar.mileage}</p>
                    <p>Transmission Type: Automatic</p>
                    <p>Fuel: Petrol ⛽</p>
                    <p>Rim material: Aluminum</p>
                    <p>Safety Rating: ⭐⭐⭐⭐</p>
                </div>
                <div className='image_container_1'>
                    <img className='image' src={selectedCar.image} alt={carName} />
                </div>
            </div>

            <button
                className='Button_1'
                onClick={() => alert('Payment done successfully!')}
                style={{ backgroundColor: 'green' }}
            >
                Buy
            </button>
        </div>
    );
}

export default SelectedCar;
