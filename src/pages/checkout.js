import React from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'
import  Link  from 'next/link';
const Checkout = ({ cart, addToCart, removeFromCart, clearCart , subtotal }) => {

  console.log(cart , addToCart, removeFromCart, clearCart )
  return (
  <>
    <div className='container m-auto '>
      <h1 className='font-bold text-4xl text-center my-4'>Checkout</h1>
      <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
      <div className=" mx-auto flex my-2">
        <div className='px-2 w-1/2'>
          <div className='relative mb-4'>
            <label htmlFor='name' className='text-sm  leading-7 text-gray-600 '>Name </label>
            <input type="text" name="name" id="name" className='w-full bg-white rounded border border-red-600  focus:border-pink-500 focus:ring-2  text-base outline-0 text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className='relative mb-4'>
            <label htmlFor='email' className='text-sm  leading-7 text-gray-600 '>Email </label>
            <input type="email" name="email" id="email" className='w-full bg-white rounded border border-red-600  focus:border-pink-500 focus:ring-2  text-base outline-0 text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
          </div>
        </div>
      </div>
      <div className='px-2 w-full'>
        <div className='relative mb-4'>
          <label htmlFor='address' className='text-sm  leading-7 text-gray-600 '>Address </label>
          <textarea name="address" id="address" cols={30} rows={2} className='w-full bg-white rounded border border-red-600  focus:border-pink-500 focus:ring-2  text-base outline-0 text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'></textarea>
         
        </div>
      </div>
      <div className=" mx-auto flex my-2">
        <div className='px-2 w-1/2'>
          <div className='relative mb-4'>
            <label htmlFor='phone' className='text-sm  leading-7 text-gray-600 '>Phone </label>
            <input type="phone" name="phone" id="phone" className='w-full bg-white rounded border border-red-600  focus:border-pink-500 focus:ring-2  text-base outline-0 text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className='relative mb-4'>
            <label htmlFor='city' className='text-sm  leading-7 text-gray-600 '>city </label>
            <input type="city" name="city" id="city" className='w-full bg-white rounded border border-red-600  focus:border-pink-500 focus:ring-2  text-base outline-0 text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
          </div>
        </div>
      </div>
      <div className=" mx-auto flex my-2">
        <div className='px-2 w-1/2'>
          <div className='relative mb-4'>
            <label htmlFor='state' className='text-sm  leading-7 text-gray-600 '>State </label>
            <input type="text" name="state" id="state" className='w-full bg-white rounded border border-red-600  focus:border-pink-500 focus:ring-2  text-base outline-0 text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className='relative mb-4'>
            <label htmlFor='pincode' className='text-sm  leading-7 text-gray-600 '>Pincode </label>
            <input type="number" name="pincode" id="pincode" className='w-full bg-white rounded border border-red-600  focus:border-pink-500 focus:ring-2  text-base outline-0 text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
          </div>
        </div>
      </div>

      <h2 className='font-semibold text-xl'>2. Review Cart items</h2>
      <div  className="  sidecart  bg-pink-100 px-8 p-6 m-2   ">
        <ol className="list-decimal  font-semibold" >
          {
            Object.keys(cart).length == 0 && <div className='my-4 font-semibold'>Your cart is empty.</div>
          }
         {Object.keys(cart).map((k)=> { return <li key={k}>{console.log(k)}
            <div className='item flex my-3 bg-pink-100'>
              <div className=' '>{cart[k].name}</div>
              <div className='w-1/3  flex items-center justify-center text-lg' ><AiFillMinusCircle onClick ={()=>{removeFromCart(k, 1 , cart[k].price , cart[k].name , cart[k].size ,cart[k].variant)}}  className=' text-pink-500 curser-pointer text-sm ' /> <span className='mx-2 text-sm'>  {cart[k].qty} </span><AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].price , cart[k].name , cart[k].size , cart[k].variant)}} className=' text-pink-500 curser-pointer text-sm' /></div>
            </div>
          </li>})}
        </ol>
      <span className=' font-bold'>subtotal = {subtotal}</span>
      </div>
      <div className="mx-4">
        <Link href={'/checkout'}>
          <button className='flex mr-2 text-white bg-pink-500 boder-0 p-2 focus:outline-none hover:bg-pink-600 rounded text-sm'>
           <BsFillBagCheckFill className='mr-1'/> Pay Rs {subtotal}</button>
        </Link>
      </div>
    </div>
  </>
  )
}

export default Checkout;
