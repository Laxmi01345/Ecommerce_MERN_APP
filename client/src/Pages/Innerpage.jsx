import React from 'react'

const Innerpage = (props) => {
    const {product} = props;
  return (
    <div>
        <div>
            <img src={product.image} alt="" />
        </div>
      
    </div>
  )
}

export default Innerpage
