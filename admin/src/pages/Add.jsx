import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import {backendUrl} from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try{
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(sizes));

      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      const response = await axios.post(backendUrl + '/api/product/add', formData,{headers:{token}})
       
      // console.log(response.data);
      if(response.data.success){
        toast.success(response.data.message);
        setName('');
        setDescription('');
        setCategory('');
        setPrice('');
        setSubCategory('');
        setSizes([]);
        setBestseller(false);
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
      }
      else{
        toast.error(response.data.message);
      }
    }
    catch(error){
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler}  className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>

        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL( image1)} alt="" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL( image2)} alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL( image3)} alt="" />
            <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL( image4)} alt="" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>


        <div>
          <p className='mb-2'>Product category</p>
          <select className='w-full px-3 py-2' required onChange={(e)=>setCategory(e.target.value)} value={category}>
            <option value="">Select a category</option>
            <option value="Daily Puja Essentials">Daily Puja Essentials</option>
            <option value="Festival Puja Kits">Festival Puja Kits</option>
            <option value="Spiritual Idols & Murti">Spiritual Idols & Murti</option>
            <option value="Mandir & Puja Decor">Mandir & Puja Decor</option>
            <option value="Aroma & Fragrance">Aroma & Fragrance</option>
            <option value="Rudraksha,Yantras & Malas">Rudraksha,Yantras & Malas</option>
            <option value="Scriptures & Spiritual Books">Scriptures & Spiritual Books</option>
            <option value="Subscription Puja Boxes">Subscription Puja Boxes</option>
            <option value="Heritage Gifts & Hampers">Heritage Gifts & Hampers</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Sub category</p>
          <select className='w-full px-3 py-2' required onChange={(e)=>setSubCategory(e.target.value)} value={subCategory}>
            <option value="">Select a product</option>
            <option value="Puja Kits (Basic to Premium)">Puja Kits (Basic to Premium)</option>
            <option value="Agarbatti, Dhoop, Sambrani">Agarbatti, Dhoop, Sambrani</option>
            <option value="Kumkum, Haldi, Chandan">Kumkum, Haldi, Chandan</option>
            <option value="Ghee Diyas & Cotton Wicks">Ghee Diyas & Cotton Wicks</option>
            <option value="Camphor, Cow Dung Cakes">Camphor, Cow Dung Cakes</option>
            <option value="Panchmeva, Honey, Sacred Water">Panchmeva, Honey, Sacred Water</option>
            <option value="Diwali Lakshmi-Ganesh Puja Kit">Diwali Lakshmi-Ganesh Puja Kit</option>
            <option value="Durga Puja Kit (with Shola Items)">Durga Puja Kit (with Shola Items)</option>
            <option value="Kali Puja Kit">Kali Puja Kit</option>
            <option value="Saraswati Puja Kit">Saraswati Puja Kit</option>
            <option value="Janmashtami, Shivratri, Holi Kits">Janmashtami, Shivratri, Holi Kits</option>
            <option value="Raksha Bandhan, Karwa Chauth Kits">Raksha Bandhan, Karwa Chauth Kits</option>
            <option value="Brass Idols (Ganesha, Lakshmi, Shiva, Hanuman, etc.)">Brass Idols (Ganesha, Lakshmi, Shiva, Hanuman, etc.)</option>
            <option value="Marble Dust/Polyresin Idols">Marble Dust/Polyresin Idols</option>
            <option value="Terracotta/Clay Eco-Friendly Idols">Terracotta/Clay Eco-Friendly Idols</option>
            <option value="Custom Handcrafted Murtis (on request)">Custom Handcrafted Murtis (on request)</option>
            <option value="Miniature Pocket Idols">Miniature Pocket Idols</option>
            <option value="Toran, Bandhanwar, Wall Hangings">Toran, Bandhanwar, Wall Hangings</option>
            <option value="Urli Bowls, Bell Hangings, Kalash">Urli Bowls, Bell Hangings, Kalash</option>
            <option value="Puja Mats, Asanas, Wooden Platforms">Puja Mats, Asanas, Wooden Platforms</option>
            <option value="Brass/Steel Puja Thalis">Brass/Steel Puja Thalis</option>
            <option value="Puja Room Nameplates">Puja Room Nameplates</option>
            <option value="Framed Mantra Scrolls">Framed Mantra Scrolls</option>
            <option value="Premium Agarbatti & Dhoop Sticks">Premium Agarbatti & Dhoop Sticks</option>
            <option value="Camphor Diffusers">Camphor Diffusers</option>
            <option value="Essential Oils (Tulsi, Lavender, Sandal)">Essential Oils (Tulsi, Lavender, Sandal)</option>
            <option value="Herbal Fragrance Powders">Herbal Fragrance Powders</option>
            <option value="Spiritual Soy & Ghee Candles">Spiritual Soy & Ghee Candles</option>
            <option value="Nepali Rudraksha (1–14 Mukhi)">Nepali Rudraksha (1–14 Mukhi)</option>
            <option value="Rudraksha Bracelets & Malas">Rudraksha Bracelets & Malas</option>
            <option value="Yantras (Shree, Kuber, Durga, Navgraha)">Yantras (Shree, Kuber, Durga, Navgraha)</option>
            <option value="Energized Crystal Pyramids">Energized Crystal Pyramids</option>
            <option value="Silver & Copper Yantras">Silver & Copper Yantras</option>
            <option value="Bhagavad Gita, Ramayana, Hanuman Chalisa">Bhagavad Gita, Ramayana, Hanuman Chalisa</option>
            <option value="Shiv Puran, Chandi Path">Shiv Puran, Chandi Path</option>
            <option value="Mantra Guides (Daily/Occasional)">Mantra Guides (Daily/Occasional)</option>
            <option value="Bilingual Editions (Bengali + English)">Bilingual Editions (Bengali + English)</option>
            <option value="Kids' Spiritual Education Books">Kids' Spiritual Education Books</option>
            <option value="Monthly Essentials Puja Box">Monthly Essentials Puja Box</option>
            <option value="Festival Special Puja Boxes">Festival Special Puja Boxes</option>
            <option value="Custom Family Box (Birthday, Griha Pravesh, etc.)">Custom Family Box (Birthday, Griha Pravesh, etc.)</option>
            <option value="Corporate Puja Subscription">Corporate Puja Subscription</option>
            <option value="Durga Puja Gift Hampers">Durga Puja Gift Hampers</option>
            <option value="Wedding & Housewarming Gift Sets">Wedding & Housewarming Gift Sets</option>
            <option value="Brass Idol Combo Boxes">Brass Idol Combo Boxes</option>
            <option value="Personalized Spiritual Gift Boxes">Personalized Spiritual Gift Boxes</option>
            <option value="Return Gifts (Corporate, Wedding, Events)">Return Gifts (Corporate, Wedding, Events)</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w[120px]' type="number" placeholder='25' required />
        </div>

      </div>

      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          <div onClick={()=>setSizes(prev => prev.includes('S')? prev.filter(item => item!=='S') : [...prev, 'S'])} >
            <p className={`${sizes.includes('S')? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>S</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes('M')? prev.filter(item => item!=='M') : [...prev, 'M'])} >
            <p className={`${sizes.includes('M')? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>M</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes('L')? prev.filter(item => item!=='L') : [...prev, 'L'])} >
            <p className={`${sizes.includes('L')? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>L</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes('XL')? prev.filter(item => item!=='XL') : [...prev, 'XL'])} >
            <p className={`${sizes.includes('XL')? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>XL</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes('XXL')? prev.filter(item => item!=='XXL') : [...prev, 'XXL'])} >
            <p className={`${sizes.includes('XXL')? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>XXL</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={()=>setBestseller(prev => !prev)} type="checkbox" id='bestseller' checked={bestseller} />
        <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>Add</button>
    </form>
  )
}

export default Add
