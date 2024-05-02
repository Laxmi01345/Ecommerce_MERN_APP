import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Category = ({ setSearchFilter }) => {
    const [dropdown, setDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categories = [
        { id: 'lipstick', label: 'Lipstick' },
        { id: 'foundation', label: 'Foundation' },
        { id: 'eyeliner', label: 'Eyeliner' },
        { id: 'blush', label: 'Blush' },
        { id: 'bronzer', label: 'Bronzer' },
        { id: 'eyeshadow', label: 'Eyeshadow' },
        { id: 'lip_liner', label: 'Lip Liner' },
        { id: 'mascara', label: 'Mascara' },
        { id: 'nail_Polish', label: 'Nail Polish' }
    ];

    const handleCategorySelection = (category) => {
        setSelectedCategory(category)
        setSearchFilter(category);
    };

    const Handledropdown = () => {
        setDropdown(!dropdown);
    };

    const CategoryChoice = () => {
        return (
            <div className='p-2 grid grid-cols-2 '>
                <div>
                    {categories.map((category) => (
                        <div key={category.id}>
                            <label htmlFor={category.id}>{category.label}</label>
                        </div>
                    ))}
                </div>
                <div>
                    {categories.map((category) => (
                        <input
                            key={category.id}
                            type="radio"
                            name='tx'
                            id={category.id}
                            className='mx-16'
                            checked={selectedCategory === category.id}
                            onChange={() => handleCategorySelection(category.id)}
                            
                        />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className='w-60 mx-10 m-8 bg-white'>
                <button className='w-80 flex justify-center font-bold ' onClick={Handledropdown}>
                    Category <IoIosArrowDown className='mx-10 m-1 font-bold' />
                </button>
                {dropdown && <CategoryChoice />}
            </div>
        </div>
    );
};

export default Category;
