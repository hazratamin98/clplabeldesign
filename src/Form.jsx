import React, { useState } from 'react';

const Form = () => {
  const [productName, setProductName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [product, setProduct] = useState('');
  const [fragrance, setfragrance] = useState('');
  const [language, setLanguage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(productName, businessName, businessAddress);
  };

  return (
    <form onSubmit={handleSubmit}>
   <div className='   md:ml-60  '>
    
        <h1 className='font-medium text-[#212529] text-[32px]'>CANDLE SHACK</h1>
        <a className='text-orange-700'href="https://candle-shack.co.uk/blogs/candle-wicks/clp-label-design-tool" target="_blank">Learn more about the CLP Design Tool</a>
   </div>

          <div className="mb-6 flex items-center justify-center gap-8">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="product">
          Fragrance :
        </label>
        <select
          className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="product"
          value={fragrance}
          onChange={(event) => setfragrance(event.target.value)}
        >
          <option value="" disabled>
            Select a product
          </option>
          <option value="product1">Product 1</option>
          <option value="product2">Product 2</option>
          <option value="product3">Product 3</option>
        </select>
      </div>

        <div className="mb-6 flex items-center justify-center gap-24">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="product">
          Product :
        </label>
        <select
          className="shadow appearance-none border rounded w-1/4  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="product"
          value={product}
          onChange={(event) => setProduct(event.target.value)}
        >
          <option value="" disabled>
            Select a product
          </option>
          <option value="product1">Product 1</option>
          <option value="product2">Product 2</option>
          <option value="product3">Product 3</option>
        </select>
      </div>


      <div className="mb-6 flex items-center justify-center gap-20">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="language">
          Language :
        </label>
        <select
          className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="language"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        >
          <option value="" disabled>
            Select a language
          </option>
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="spanish">Spanish</option>
        </select>
      </div>

    

      <div className="mb-6 flex items-center justify-center gap-8">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="product-name">
          Product  <br/> Name :
        </label>
        <input
          className="shadow appearance-none border rounded w-1/4  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="product-name"
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
        />
      </div>

      <div className="mb-6 flex items-center justify-center gap-10">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="business-name">
          Business  <br/> Name :
        </label> 
        <input
          className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="business-name"
          type="text"
          placeholder="Business Name"
          value={businessName}
          onChange={(event) => setBusinessName(event.target.value)}
        />
      </div>
      <div className="mb-6 flex items-center justify-center gap-8">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="business-name">
          Business <br/> Address :
        </label>
        <input
          className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="business-Address"
          type="text"
          placeholder="Address Line 1, Town/City, County and Postcode."
          value={businessName}
          onChange={(event) => setBusinessName(event.target.value)}
        />
      </div>

     
      <div className="mb-6 flex items-center justify-center gap-6">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="business-address">
         Business  <br/>Telephone : 
        </label>
        <input
          className="shadow appearance-none border rounded w-1/4  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="business-address"
          type="number"
          placeholder="01234567890"
          value={businessAddress}
          onChange={(event) => setBusinessAddress(event.target.value)}
        />
      </div>

      <div className="mb-6 flex items-center justify-center gap-20">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="business-address">
          UFI : 
        </label>
        <input
          className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="business-address"
          type="text"
          placeholder=""
          value={businessAddress}
          onChange={(event) => setBusinessAddress(event.target.value)}
        />
      </div>

      
      <div className="mb-6 flex  items-center justify-center gap-8">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="business-address">
         Batch  <br/> Number : 
        </label>
        <input
          className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="business-address"
          type="number"
          placeholder="BN:123"
          value={businessAddress}
          onChange={(event) => setBusinessAddress(event.target.value)}
        />
      </div>

      

      <div className="flex items-center space-x-6 justify-center">
        <button
          className="bg-black hover:bg-gray-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Refresh
        </button>
          <button
          className="bg-black hover:bg-gray-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Save as PDF
        </button>
      </div>
    </form>
  );
};

export default Form;