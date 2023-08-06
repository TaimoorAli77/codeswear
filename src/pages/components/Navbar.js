import Image from 'next/image';
import React, { useRef } from 'react';
import '@/styles/main.module.css'
import Link from 'next/link';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subtotal }) => {

  console.log(cart, addToCart, removeFromCart, clearCart, subtotal)

  const ref = useRef();
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }
  }

  return (
    <div className=' flex flex-col md:flex-row md:justify-start items-center justify-between py-2 shadow-xl'>
      <div className="logo  mx-5">
        <Link href={'/'}><img src='/logo.png' alt='missing' height={300} width={140} /> </Link>
      </div>
      <div className="nav  ">
        <ul className='flex space-x-5 items-center font-bold md:text-l'>
          <Link href={'/tshirts'}> <li>Tshirts</li></Link>
          <Link href={'/hoodies'}><li>Hoodies</li></Link>
          <Link href={'/mugs'}> <li>Mugs</li></Link>
          <Link href={'/stickers'}><li>Stickers</li></Link>
        </ul>
      </div>
      <div onClick={toggleCart} className="cart absolute cursor-pointer  right-0 mx-6 top-4">
        <AiOutlineShoppingCart className='text-xl md:text-2xl' />
      </div>
      <div ref={ref} className="w-72 h-full sidecart absolute top-0 right-0 bg-pink-100 px-8 py-10 p-10  transform transition-transform translate-x-full ">
        <h2 className="font-bold text-xl text-center" >Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-4 right-2 cursor-pointer text-2xl text-pink-500"><AiFillCloseCircle /></span>
        <ol className="list-decimal  font-semibold" >

          {
            Object.keys(cart).length == 0 && <div className='my-4 font-semibold'>Your cart is empty.</div>
          }



         {Object.keys(cart).map((k)=> { return <li key={k}>{console.log(k)}
            <div className='item flex my-3'>
              <div className='w-2/3 '>{cart[k].name}</div>
              <div className='w-1/3  flex items-center justify-center text-lg' ><AiFillMinusCircle onClick ={()=>{removeFromCart(k, 1 , cart[k].price , cart[k].name , cart[k].size ,cart[k].variant)}}  className=' text-pink-500 curser-pointer text-sm ' /> <span className='mx-2 text-sm'>  {cart[k].qty} </span><AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].price , cart[k].name , cart[k].size , cart[k].variant)}} className=' text-pink-500 curser-pointer text-sm' /></div>
            </div>
          </li>})}




        </ol>
        <div className="flex float-left">
          <button className="flex text-white bg-pink-500 border-0 px-3 py-2 mr-2  focus:outline-none hover:bg-pink-600 rounded text-sm mt-1 sm:mt-0"><BsFillBagCheckFill className='m-1' />Checkout</button>
          <button onClick={clearCart} className="flex text-white bg-pink-500 border-0 py-2 px-3 focus:outline-none hover:bg-pink-600 rounded text-sm mt-1 sm:mt-0">Clear Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
