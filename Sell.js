import React, { useState } from 'react';
import './Sell.css'

function Sell() {
    // State to store information about each image (file, name, and specifications)
    const [images, setImages] = useState([]);
    
    // State for previews
    const [previews, setPreviews] = useState([]);

    // Function to handle file selection
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);

        
        // Create previews for each selected file
        const newPreviews = files.map((file) => URL.createObjectURL(file));
        setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
        
        // Ask for image details (name and specifications)
        const newImages = files.map((file) => {
            // Prompt the user for name and specifications
            const name = prompt('Enter the name for the image:');
            const model = prompt('Enter the model for the image:');
            const mileage = prompt('Enter the mileage for the image:');
            const kmdriven = prompt('Enter the Km Driven for the image:');
            const price = prompt('Enter the price for the image:');



     
            
            // Return an object with file, name, and specifications
            return { file, name,model,mileage ,kmdriven,price };
        });
        
        // Update the images state
        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    return (
        <div>
            <h2 className='h2'>Upload Images to Sell</h2>

           <input className='Choose_image' type="file" multiple onChange={handleFileChange} accept="image/*" />
            

            {/* Display image previews with name and specifications in a grid format */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '20px' }}>
                {previews.map((preview, index) => {
                    const { name,model, mileage,kmdriven,price } = images[index] || {};
                    return (
                        <div className='Selling_content' key={index}>
                            <img
                                src={preview}
                                alt={`Preview ${index}`}
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <div className='Car_Content'>
                                <p className='Car_detail'><strong>Car Name:</strong> {name || 'Not specified'}</p>
                                <p className='Car_detail'><strong>Model:</strong> {model || 'Not specified'}</p>
                                <p className='Car_detail'><strong>Mileage:</strong> {mileage || 'Not specified'}</p>
                                <p className='Car_detail'><strong>KM Driven:</strong> {kmdriven || 'Not specified'}</p>
                                <p className='Car_detail'><strong>Price:</strong> {price || 'Not specified'}</p>



                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Sell;
