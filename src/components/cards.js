   //import products from './product'
   import React, { useState, useEffect } from 'react'
   import axios from "axios";
    
    export default function Example() {
          //initialise search value
  const [searchValue, setSearchValue] = useState("")
  const [product, setProducts] = useState("")
  const baseURL = "https://script.googleusercontent.com/macros/echo?user_content_key=AArn8UxWg1fd8y6vvjrnGLqhW6vPKXAeMtlPnaFe_zyb0iY0r18YDHoYL9pyl-ciSuwWW8Sw4TdAWb0RTnrLMQPZrAXK4r1gm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDa0y51da8lLcUch3ZST_V4QEoVb2Wt_oBaK0VCYAWm7e6jaX7IedROfUww1QCCQuQgnQ1f7tyLvkiNePIHvIkt25ZnzAxFfsg&lib=MIvACqJ9QsFYAqlw4X9yn7uRAXAZfkukt";
        //whenever search value gets updated, we will update patience list
//   useEffect(() => {
//     const newProducts = products.filter(value => value.name.toLowerCase().includes(searchValue.toLowerCase())||value.status.toLowerCase().includes(searchValue.toLowerCase()))
//     setProducts(newProducts)
//   }, [searchValue])
React.useEffect(() => {
    axios.get(baseURL).then((response) => {
        setProducts(response.data);
        console.log(response.data);
    });
  }, []);

  if (!product) return null;
        return (
        <div className="bg-white dark:bg-gray-600">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="font-medium text-center font-bold text-4xl mt-0 mb-2 text-blue-300 mt-5 pb-2">J5 RO HADIAH KUPON</h2>
            <div class="">
        <div class="flex  inset-y-0 left-0 items-center pl-3 pointer-events-none">
            
        </div>
        <input type="text" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder="Cari  berdasarkan nama produk, jumlah kupon, status produk...." id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        
    </div>
        
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            {searchValue !== '' ?(  
            product.map((product) => (
            <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 drop-shadow-lG">
            
    <a >
        <img class="p-8 rounded-t-lg"
        src={product.imageSrc}
        alt={product.imageAlt} />
    </a>
    <div class="px-5 pb-5">
        <a >
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">{product.price}</span>
    {product.status === "Tersedia" ?(  
    <span class="bg-green-100 text-white-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-white-800 ">{product.status}</span>
    ):(<span class="bg-red-100 text-white-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-white-800 ">{product.status}</span>
    )}
</div>
<div class="flex justify-between items-center">
    <span class="text-lg font-bold text-gray-900 dark:text-white"> Hubungi </span>
                <a href={`https://api.whatsapp.com/send?phone=6285218720488&text=*${product.name}*%0A%0ASaya%20tertarik%20untuk%20menukar%20dengan%20kartu%20saya%20dengan%20produk%20berikut.%20Apakah%20stok%20barang%20masih%20tersedia%3F%20Terimakasih%0A%0A%0A${product.imageSrc}`} class="text-white text-sm flex mr-2 bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
</svg>
Whatsapp
</a>   
        </div>
    </div>            
</div>
))):(product.map((p) => (
    <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 drop-shadow-lG">
    
<a >
<img class="p-8 rounded-t-lg"
src={p.imageSrc}
alt={p.imageAlt} />
</a>
<div class="px-5 pb-5">
<a >
    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{p.name}</h5>
</a>
<div class="flex items-center mt-2.5 mb-5">
    
    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">{p.price}</span>
    {p.status === "Tersedia" ?(  
    <span class="bg-green-100 text-white-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-white-800 ">{p.status}</span>
    ):(<span class="bg-red-100 text-white-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-white-800 ">{p.status}</span>
    )}
</div>
<div class="flex justify-between items-center">
<a href="tel:6281363865440" class="text-white text-sm flex mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-900 dark:focus:ring-green-800"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>

&nbsp;Hubungi
</a>    
                <a href={`https://api.whatsapp.com/send?phone=62 813-63865440&text=*${p.name}*%0A%0ASaya%20tertarik%20untuk%20menukar%20${p.name}%20dengan%20kartu%20saya.%20Apakah%20stok%20barang%20masih%20tersedia%3F%20Terimakasih%0A%0A%0Ahttp://adelw.in/J5-CARD/`} class="text-white text-sm flex mr-2 bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
</svg>
&nbsp;WA
</a>       
</div>
</div>            
</div>)))
    }      
</div>
            </div>
        </div>
        )
    }
    