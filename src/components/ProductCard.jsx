import React, { useEffect } from 'react';
import { useProductStore } from '../store.js'; // Removed useFilterStore as it is not used
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ProductCard({ product }) {
  
  const { productStates, setProductImage, setProductHover, initializeProduct } = useProductStore();

  const productState = productStates[product.id] || {};
  const currentImage = productState.currentImage || product.img.black;
  const hover = productState.hover || false;
  const img = Object.values(product.img); // Corrected the variable declaration

  useEffect(() => {
    initializeProduct(product.id, product.img.black); // Corrected the property access
  }, [product.id, product.img.black, initializeProduct]);

  const handlePrevs = () => {
    const currentIndex = img.indexOf(currentImage)
    const prevIndex = (currentIndex - 1 + img.length) % img.length;
    setProductImage(product.id, img[prevIndex])
  }
  const handleNext = () => {
    const currentIndex = img.indexOf(currentImage)
    const prevIndex = (currentIndex + 1) % img.length;
    setProductImage(product.id, img[prevIndex])
  }

  return (
    <div
      onMouseEnter={() => setProductHover(product.id, true)}
      onMouseLeave={() => setProductHover(product.id, false)}
      className='relative w-[20rem] m-[1rem] border-[#ECECEC] ml-[3rem] p-4'>


      <div className="relative bg-gray-200 p-4">
        <img src={currentImage} alt={product.title} className='object-cover w-[12rem] h-[12rem] rounded-md ml-[1rem]' />
        {hover && (
          <div className=' absolute inset-0 flex items-center justify-between px-4'>
            <button onClick={handlePrevs} className=' carousel-button text-white'>
              <FaChevronLeft className=' bg-gray-400 rounded-full' />
            </button>
            <button onClick={handleNext} className=' carousel-button text-white'>
              <FaChevronRight className=' bg-gray-400 rounded-full' />
            </button>
          </div>
        )}
      </div>
      <div className=' mt-[1rem]'>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
      </div>
    </div>
  );
}
