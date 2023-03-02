// import React from 'react';
// import '../CSSfiles/AllProducts.css';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import pic from '../Images/ball.jpg';



// const Product =
//   {
//     name: 'Product 8',
//     image:pic,
//   };

// const AllProducts = () => {


//   return (
//   <div className="x">
//     <div className="flex flex-col items-center gap-8 w-4/5 mx-auto py-2 mb-7 br">

//       <h2 className="text-3xl ">{Product.name}</h2>
//     <img src={pic} alt="pic" className="w-4/5 mx-auto" />
      
//     <div className="flex flex-col items-center w-4/5 gap-6">

//     <div className="flex items-center gap-1 sm:gap-9 justify-around">
//     <img src={pic} alt="pic" className="w-20" />
//     <img src={pic} alt="pic" className="w-20" />
//     <img src={pic} alt="pic" className="w-20" />
//     <img src={pic} alt="pic" className="w-20" />
//     </div>

//     <b className="text-lg brgt brgb w-full lg:w-full">
//       Rs.1226
//     </b>
//     <div className="brgb flex justify-around w-full">
//       <span><b>Stock:</b> in stock</span>
//       <span><b>Ships in:</b> 1~3 days</span>
//     </div>

//     <div className="brgb w-full"><b>Delivery area:</b> Lahore only</div>
//     <div className="brgb w-full"><b>Country of Origin:</b> Pakistan</div>
//     <div className="brgb w-full"><b>Shipped by:</b> Smart cart</div>

//     <div className="flex justify-between w-full brgb "> 
//     <span className="flex gap-2"><HeartBrokenRounded/>Add to wishlist</span>
//      <div className="flex gap-4"><WhatsApp/><Facebook/><Twitter/></div> 
//      </div>

//     </div>
//     </div>
//     <div className='flex w-full fixed bottom-0 h-8'>
//     <button className="w-1/2 text-orange-100 bg-gray-900">Buy Now</button>
//     <button className="w-1/2 bg-orange-300">Add to Cart</button>
//     </div>
//     </div>
// )}

// export default AllProducts;











// // import React, { useState } from 'react';
// // import { Modal, Card, Rate, List, Avatar, Input, Button } from 'antd';
// // import 'src\CSSfiles\AllProducts.scss'

// // const ProductQuickView = ({ product, visible, setVisible }) => {
// //   const [review, setReview] = useState('');
// //   const [rating, setRating] = useState(0);
// //   const [reviews, setReviews] = useState(product.reviews);

// //   const handleSubmit = () => {
// //     if (!review) {
// //       message.error('Please enter a review');
// //       return;
// //     }
// //     if (!rating) {
// //       message.error('Please rate the product');
// //       return;
// //     }
// //     setReviews([
// //       ...reviews,
// //       {
// //         rating,
// //         review,
// //         author: 'You',
// //         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
// //       },
// //     ]);
// //     setReview('');
// //     setRating(0);
// //     message.success('Review submitted successfully');
// //   };

// //   return (
// //     <Modal
// //       title={product.name}
// //       visible={visible}
// //       onCancel={() => setVisible(false)}
// //       footer={null}
// //     >
// //       <Card
// //         cover={<img alt={product.name} src={product.image} />}
// //         style={{ width: '100%' }}
// //       >
// //         <Card.Meta title={product.name} description={product.description} />
// //         <h4>Price: {product.price}</h4>
// //         <h4>Average rating: {product.rating}</h4>
// //         <List
// //           itemLayout="horizontal"
// //           dataSource={reviews}
// //           renderItem={(item) => (
// //             <List.Item>
// //               <List.Item.Meta
// //                 avatar={<Avatar src={item.avatar} />}
// //                 title={item.author}
// //                 description={item.review}
// //               />
// //               <Rate disabled defaultValue={item.rating} />
// //             </List.Item>
// //           )}
// //         />
// //         <h4>Add your review</h4>
// //         <Rate value={rating} onChange={(value) => setRating(value)} />
// //         <Input.TextArea
// //           value={review}
// //           onChange={(e) => setReview(e.target.value)}
// //           rows={4}
// //         />
// //         <Button type="primary" onClick={handleSubmit}>
// //           Submit
// //         </Button>
// //       </Card>
// //     </Modal>
// //   );
// // };

// // export default ProductQuickView;



