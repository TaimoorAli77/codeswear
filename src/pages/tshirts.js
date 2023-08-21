/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Product from './models/Product';
import mongoose from 'mongoose';
const Tshirts = ({ products }) => {
  console.log(products)
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4  justify-center">
            {Object.keys(products).map((items) => {
              return <div key={products[items]._id} className="lg:w-1/5 md:w-1/2 p-4 w-full  shadow-lg m-5" >
                <Link passHref={true} href={`/product/${products[items].slug}`} className="block relative  rounded overflow-hidden">
                  <img alt="ecommerce" className="m-auto  md: h-[30vh]   block " src={products[items].img} />
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">t-shirts</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{products[items].title}</h2>
                    <p className="mt-1">{products[items].price}</p>
                    <div className="mt-1">
                      {  products[items].size.includes('S') && <span className="border border-gray-300 px-1 mx-1">S</span>}{
                        products[items].size.includes('M') && <span className="border border-gray-300 px-1 mx-1">M</span>}{
                        products[items].size.includes('L') && <span className="border border-gray-300 px-1 mx-1">L</span>}{
                        products[items].size.includes('XL') && <span className="border border-gray-300 px-1 mx-1">XL</span>}{
                        products[items].size.includes('XXL') && <span className="border border-gray-300 px-1 mx-1">XXL</span>}

                    </div>
                    <div className='mt-1'>
                      {products[items].color.includes('yellow') && <button className='border-2 border-gray-300 ml-1 bg-yellow-600 rounded-full w-6 h-6 focus:outline-none'></button>}
                      {products[items].color.includes('blue') && <button className='border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none'></button>}
                      {products[items].color.includes('black') && <button className='border-2 border-gray-300 ml-1 bg-black-700 rounded-full w-6 h-6 focus:outline-none'></button>}
                      {products[items].color.includes('white') && <button className='border-2 border-gray-300 ml-1 bg-white-700 rounded-full w-6 h-6 focus:outline-none'></button>}
                      {products[items].color.includes('green') && <button className='border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none'></button>}
                      {products[items].color.includes('orange') && <button className='border-2 border-gray-300 ml-1 bg-orange-700 rounded-full w-6 h-6 focus:outline-none'></button>}

                    </div>
                  </div>
                </Link>
              </div>
            })}
          </div>
        </div>
      </section>
    </div>
  );
}


export const getServerSideProps = async () => {

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find({ category: "tshirts" })
  let tshirts = {};
  for (let item of products) {
    if (item.title in tshirts) {
      if (!tshirts[item.title].color.includes(item.color) && item.availableQty > 0) {
        tshirts[item.title].color.push(item.color)
      }
      if (!tshirts[item.title].size.includes(item.size) && item.availableQty > 0) {
        tshirts[item.title].size.push(item.size)
      }
    }
    else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        tshirts[item.title].size = [item.size];
        tshirts[item.title].color = [item.color];
      }

    }
  }

  return {
    props: { products: JSON.parse(JSON.stringify(tshirts)) }
  }
}
export default Tshirts;
