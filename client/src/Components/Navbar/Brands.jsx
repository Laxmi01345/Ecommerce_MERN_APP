import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
const Brands = ({setChoicebrand}) => {

  const [selectedbrand, setSelectedbrand] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const Handledropdown = () => {

    setDropdown(!dropdown)
  }

  const brands = [
    { id: 'covergirl', label: 'Cover Girl' },
    { id: 'colourpop', label: 'ColorPop' },
    { id: 'almay', label: 'Almay' },
    { id: "l'oreal", label: "Loreal" },
    { id: 'maybelline', label: 'Maybelline' },
    { id: 'pure anada', label: 'Pure anada' },
    { id: 'smashbox', label: 'Smashbox' },
    { id: 'glossier', label: 'Glossier' },
    { id: 'marcelle', label: 'Marcelle' },
    { id: 'revlon', label: 'Revlon' }
  ];

  const handlebrandSelection = (brand) => {
    setSelectedbrand(brand);
    setChoicebrand(brand);
    
    
    
};

  const Brand_choice = () => {
    

    return (
      <>
        <div className='p-2 grid grid-cols-2 '>
                <div>
                    {brands.map((brand) => (
                        <div key={brand.id}>
                            <label htmlFor={brand.id}>{brand.label}</label>
                        </div>
                    ))}
                </div>
                <div>
                    {brands.map((brand) => (
                        <input
                            key={brand.id}
                            type="radio"
                            name='txt'
                            id={brand.id}
                            className='mx-16'
                            checked={selectedbrand === brand.id}
                            onChange={() => handlebrandSelection(brand.id)}
                            
                            
                        />
                    ))}
                </div>
            </div>

      </>
    )
  }

  return (
    <div>
      <div>
        <h1 className='text-center font-bold p-2 font-serif'>Apply Filter</h1>
        <div className='w-60 mx-10 m-8 bg-white'>
          <button className='w-80 flex justify-center font-bold' onClick={Handledropdown}>Brands <IoIosArrowDown className=' mx-10 m-1 font-bold' />  </button>

          {dropdown && <Brand_choice />}


        </div>
      </div>
    </div>
  )
}

export default Brands
