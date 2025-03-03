// import React from 'react'
// import ProductDetails from '../ProductDetails'
// import ProductCard from '../ProductCard'
// import { OpenStore } from '../OpenStore'
// const ProductDetailsPage = () => {

//   const product = {
//     id: '1',
//     name: 'Product 1',
//     description: 'A cozy boutique offering unique, high-quality clothing.',
//     price: 9000,
//     discountPrice:5000,
//     image:'/product-bg.png',
//     reviews:15,
//     rating:4.5,
//     stock: false,
//     shopName:'Awesomity Shop'

//   };

//   const products = [
//     {
//       id: 1,
//       name: 'Product 1',
//       price: 9000,
//       oldPrice: 12000,
//       imageUrl: '/product-bg.png',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       price: 15000,
//       oldPrice: 18000,
//       imageUrl: '/product-bg.png',
//     },
//     {
//       id: 3,
//       name: 'Product 3',
//       price: 10000,
//       imageUrl: '/product-bg.png', // No oldPrice
//     },
//     {
//       id: 4,
//       name: 'Product 4',
//       price: 10000,
//       imageUrl: '/product-bg.png', // No oldPrice
//     }
//   ];

//   return (
//     <div className='mx-20'>
//  <ProductDetails product={product} />
// <div>
//         <h1 className='font-bold text-[18px] mb-5'>You might also like</h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-20">
//       {products.map((products) => (
//         <ProductCard
//           key={products.id}
//           id={products.id}
//           name={products.name}
//           price={products.price}
//           oldPrice={products.oldPrice}
//           imageUrl={products.imageUrl}
//         />
//       ))}
//     </div>
//     <div className='mb-10'>
//       <OpenStore/>
//     </div>
//     </div>

//   )
// }

// export default ProductDetailsPage
