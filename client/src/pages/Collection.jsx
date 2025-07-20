import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import '../index.css'; // Assuming you have a CSS file for styles

const Collection = () => {
  const {products,search,showSearch} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const[filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subcategory,setSubcategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) =>{
    if (category.includes(e.target.value)) {
      setCategory(prev=>prev.filter(item=> item !== e.target.value));

    }
    else{
      setCategory(prev=> [...prev, e.target.value]);
    }
  }

  const toggleSubcategory = (e) =>{
    if (subcategory.includes(e.target.value)) {
      setSubcategory(prev=>prev.filter(item=> item !== e.target.value));
    }
    else{
      setSubcategory(prev=> [...prev, e.target.value]);
    }
  }

  const applyFilter = () =>{
    let productsCopy = products.slice();
    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    }
    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if(subcategory.length > 0){
      productsCopy = productsCopy.filter(item => subcategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy);
    
  }

  // useEffect(() => {
  //   console.log('Category:', category);
  //   console.log('Subcategory:', subcategory);
  // }, [category, subcategory]);

  //   useEffect(() => {
  //   setFilterProducts(products);
  // }, []);

  const sortProduct = () =>{
    let fpCopy = filterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  }
  useEffect(() => {
    applyFilter();
  }, [category,subcategory,search,showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex item-center cursor-pointer gap-2'>FILTERS 
          <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${showFilter?'rotate-90':''}`} />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox"className='w-3' value={'Daily Puja Essentials'} onChange={toggleCategory}/> Daily Puja Essentials
            </p>
            <p className='flex gap-2'>
              <input type="checkbox"className='w-3' value={'Frstival Puja Kits'} onChange={toggleCategory}/> Festival Puja Kits
            </p>
            <p className='flex gap-2'>
              <input type="checkbox"className='w-3' value={'Spiritual Idols & Murti'} onChange={toggleCategory}/> Spiritual Idols & Murti
            </p>
             <p className='flex gap-2'>
              <input type="checkbox"className='w-3' value={'Mandir & Puja Decor'} onChange={toggleCategory}/> Mandir & Puja Decor
            </p>
             <p className='flex gap-2'>
              <input type="checkbox"className='w-3' value={'Aroma & Fragrance'} onChange={toggleCategory}/> Aroma & Fragrance
            </p>
             <p className='flex gap-2'>
              <input type="checkbox"className='w-3' value={'Rudraksha, Yantras & Malas'} onChange={toggleCategory}/> Rudraksha,Yantras & Malas
            </p>
             <p className='flex gap-2'>
              <input type="checkbox"className='w-3' value={'Scriptures & Spiritual Books'} onChange={toggleCategory}/>Scriptures & Spiritual Books
            </p>
             <p className='flex gap-2'>
              <input type="checkbox"className='w-3' value={'Subscription Puja Boxes'} onChange={toggleCategory}/> Subscription Puja Boxes
            </p>
             <p className='flex gap-2'>
              <input type="checkbox"className='w-3' value={'Heritage Gifts & Hampers'} onChange={toggleCategory}/> Heritage Gifts & Hampers
            </p>
          </div>
        </div>
        {/* Subcategory Filter */}
<div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
  
  <p className='mb-3 text-sm font-medium'>TYPE</p>
  <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
    
    {/* Daily Puja Essentials */}
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Puja Kits'} onChange={toggleSubcategory}/> Puja Kits (Basic to Premium)
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Agarbatti'} onChange={toggleSubcategory}/> Agarbatti, Dhoop, Sambrani
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Kumkum'} onChange={toggleSubcategory}/> Kumkum, Haldi, Chandan
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Ghee Diyas'} onChange={toggleSubcategory}/> Ghee Diyas & Cotton Wicks
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Camphor'} onChange={toggleSubcategory}/> Camphor, Cow Dung Cakes
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Panchmeva'} onChange={toggleSubcategory}/> Panchmeva, Honey, Sacred Water
    </p>
    
    {/* Festival Puja Kits */}
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Diwali Kit'} onChange={toggleSubcategory}/> Diwali Lakshmi-Ganesh Puja Kit
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Durga Puja Kit'} onChange={toggleSubcategory}/> Durga Puja Kit (with Shola Items)
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Kali Puja Kit'} onChange={toggleSubcategory}/> Kali Puja Kit
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Saraswati Puja Kit'} onChange={toggleSubcategory}/> Saraswati Puja Kit
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Janmashtami Kit'} onChange={toggleSubcategory}/> Janmashtami, Shivratri, Holi Kits
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Raksha Bandhan Kit'} onChange={toggleSubcategory}/> Raksha Bandhan, Karwa Chauth Kits
    </p>
    
    {/* Spiritual Idols & Murti */}
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Brass Idols'} onChange={toggleSubcategory}/> Brass Idols (Ganesha, Lakshmi, Shiva, Hanuman, etc.)
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Marble Dust Idols'} onChange={toggleSubcategory}/> Marble Dust/Polyresin Idols
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Terracotta Idols'} onChange={toggleSubcategory}/> Terracotta/Clay Eco-Friendly Idols
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Custom Murtis'} onChange={toggleSubcategory}/> Custom Handcrafted Murtis (on request)
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Miniature Idols'} onChange={toggleSubcategory}/> Miniature Pocket Idols
    </p>
    
    {/* Mandir & Puja Decor */}
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Toran'} onChange={toggleSubcategory}/> Toran, Bandhanwar, Wall Hangings
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Urli Bowls'} onChange={toggleSubcategory}/> Urli Bowls, Bell Hangings, Kalash
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Puja Mats'} onChange={toggleSubcategory}/> Puja Mats, Asanas, Wooden Platforms
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Puja Thalis'} onChange={toggleSubcategory}/> Brass/Steel Puja Thalis
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Nameplates'} onChange={toggleSubcategory}/> Puja Room Nameplates
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Mantra Scrolls'} onChange={toggleSubcategory}/> Framed Mantra Scrolls
    </p>
    
    {/* Aroma & Fragrance */}
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Premium Agarbatti'} onChange={toggleSubcategory}/> Premium Agarbatti & Dhoop Sticks
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Camphor Diffusers'} onChange={toggleSubcategory}/> Camphor Diffusers
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Essential Oils'} onChange={toggleSubcategory}/> Essential Oils (Tulsi, Lavender, Sandal)
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Fragrance Powders'} onChange={toggleSubcategory}/> Herbal Fragrance Powders
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Spiritual Candles'} onChange={toggleSubcategory}/> Spiritual Soy & Ghee Candles
    </p>
    
    {/* Rudraksha, Yantras & Malas */}
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Nepali Rudraksha'} onChange={toggleSubcategory}/> Nepali Rudraksha (1–14 Mukhi)
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Rudraksha Bracelets'} onChange={toggleSubcategory}/> Rudraksha Bracelets & Malas
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Yantras'} onChange={toggleSubcategory}/> Yantras (Shree, Kuber, Durga, Navgraha)
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Crystal Pyramids'} onChange={toggleSubcategory}/> Energized Crystal Pyramids
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Silver Yantras'} onChange={toggleSubcategory}/> Silver & Copper Yantras
    </p>
    
    {/* Scriptures & Spiritual Books */}
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Bhagavad Gita'} onChange={toggleSubcategory}/> Bhagavad Gita, Ramayana, Hanuman Chalisa
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Shiv Puran'} onChange={toggleSubcategory}/> Shiv Puran, Chandi Path
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Mantra Guides'} onChange={toggleSubcategory}/> Mantra Guides (Daily/Occasional)
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Bilingual Editions'} onChange={toggleSubcategory}/> Bilingual Editions (Bengali + English)
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Kids Spiritual Books'} onChange={toggleSubcategory}/> Kids' Spiritual Education Books
    </p>
    
    {/* Subscription Puja Boxes */}
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Monthly Puja Box'} onChange={toggleSubcategory}/> Monthly Essentials Puja Box
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Festival Special Box'} onChange={toggleSubcategory}/> Festival Special Puja Boxes
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Custom Family Box'} onChange={toggleSubcategory}/> Custom Family Box (Birthday, Griha Pravesh, etc.)
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Corporate Subscription'} onChange={toggleSubcategory}/> Corporate Puja Subscription
    </p>
    
    {/* Heritage Gifts & Hampers */}
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Durga Puja Hampers'} onChange={toggleSubcategory}/> Durga Puja Gift Hampers
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Wedding Gift Sets'} onChange={toggleSubcategory}/> Wedding & Housewarming Gift Sets
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Brass Idol Combo'} onChange={toggleSubcategory}/> Brass Idol Combo Boxes
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Personalized Gift Boxes'} onChange={toggleSubcategory}/> Personalized Spiritual Gift Boxes
    </p>
    <p className='flex gap-2'>
      <input type="checkbox" className='w-3' value={'Return Gifts'} onChange={toggleSubcategory}/> Return Gifts (Corporate, Wedding, Events)
    </p>
    
  </div>
</div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Collection
