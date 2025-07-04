import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import '../index.css'; // Assuming you have a CSS file for styles
const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className='text-gray-700 hover:text-black transition ease-in-out'>
      <div className="overflow-hidden">
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt=''/>
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
