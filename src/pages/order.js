import React from 'react';

const Order = ({cart, addToCart, removeFromCart, clearCart , subtotal}) => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">CodesWear.Com</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id : 8977</h1>
              <p className="leading-relaxed mb-4">Your Order has been successfully place.</p>
              <div class="flex mb-4 text-right">
          <a class="flex-grow border-b-2 border-gray-300 text-left  py-2 text-lg px-1">Description</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
        </div>
              <div className="flex  border-gray-200 py-2">
                <span className="text-gray-500">Wear the code - (XL/Black)</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">499</span>

              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Wear the code - (XL/Black)</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">499</span>

              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Wear the code - (XL/Black)</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">499</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">SubTotal  : {subtotal} </span>
               
                
              </div>
              <div className='my-2'>

<button className="flex flex-col  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>
</div>
            </div>
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Order;
