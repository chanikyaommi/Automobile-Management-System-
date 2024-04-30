import React from 'react';
import './Services.css'; // Import CSS file for styling

function Services() {
    return (
        <div className="services-container">
            <h2>Our Services</h2>
            <ul className="service-list">
                <li className="service-item">
                    <img
                        src="./images/car-wash.jpg" // Updated relative file path to the image
                        alt="Car Wash Service"
                        className="service-image" // Add a class for styling (optional)
                    />
                    <span>Car Wash</span>
                </li>
                <li className="service-item">
                    <img
                        src="./images/breakdown.jpg" // Updated relative file path to the image
                        alt="Breakdown Service"
                        className="service-image" // Add a class for styling (optional)
                    />
                    <span>Breakdown Service</span>
                </li>
            </ul>
        </div>
    );
}

export default Services;
