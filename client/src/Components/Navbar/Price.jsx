import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Price = ({ handlePriceSelection }) => {
    const [PriceDropdown, setPriceDropdown] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState(null);

    const Prices = [
        { id: "5.0-9.0", label: "$5 - $9" },
        { id: "10.0-20.0", label: "$10 - $20" },
        { id: "20.0-25.0", label: "$20 - $25" },
        { id: "25.0-30.0", label: "$25 - $30" },
        { id: "30.0-35.0", label: "$30 - $35" },
        { id: "52.0-55.0", label: "$52 - $55" }
    ];

    const handleDropdown = () => {
        setPriceDropdown(!PriceDropdown);
    };

    const handlePriceSelectionInternal = (priceRange) => {
        setSelectedPrice(priceRange);
        handlePriceSelection(priceRange);
    };

    return (
        <div>
            <div className='w-60 mx-10 m-8 bg-white'>
                <button className='w-80 flex justify-center font-bold' onClick={handleDropdown}>
                    Price <IoIosArrowDown className=' mx-10 m-1 font-bold' />
                </button>
                {PriceDropdown && (
                    <div className='p-2 grid grid-cols-2'>
                        <div>
                            {Prices.map((price) => (
                                <div key={price.id}>
                                    <label htmlFor={price.id}>{price.label}</label>
                                </div>
                            ))}
                        </div>
                        <div>
                            {Prices.map((price) => (
                                <input
                                    key={price.id}
                                    type="radio"
                                    name='p'
                                    id={price.id}
                                    className='mx-16'
                                    checked={selectedPrice === price.id}
                                    onClick={() => handlePriceSelectionInternal(price.id)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Price;
