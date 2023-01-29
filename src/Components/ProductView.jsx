import React from 'react';
import '../CSSfiles/ProductView.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic from '../bird.jpg';
import { Facebook, HeartBroken, HeartBrokenRounded,ShoppingCart, Twitter, WhatsApp } from '@mui/icons-material';


const Product = [
  {
    name: 'Product 8',
    image:pic,
  }
];

const ProductView = () => {


  return (
  <div className="PContainer">
      <Card className='cardImg'>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title>{Product.name}</Card.Title>
      </Card.Body>
    </Card>
    <div className="prodDetails br">
    <div className="samplePictures br">
    <img src={pic} alt="pic" className="sampleImg" />
    <img src={pic} alt="pic" className="sampleImg" />
    <img src={pic} alt="pic" className="sampleImg" />
    <img src={pic} alt="pic" className="sampleImg" />
    </div>
    <div className="price br">
      Rs.1226
    </div>
    <div className="stockShipping br">
      <span>Stock:in stock</span>
      <span>Ships in: 1~3 days</span>
    </div>

    <div className="delvry br fs">Delivery area:Lahore only</div>
    <div className="delvry br fs">Country of Origin: Pakistan</div>
    <div className="ShipBy br fs">Shipped by: Smart cart</div>

    <div className="wslistSocial df fs br"> 
    <span className="addtow br fs"><HeartBrokenRounded/>Add to wishlist</span>
     <div className="social br"><WhatsApp/><Facebook/><Twitter/></div> 
     </div>

    </div>
    </div>
)}

export default ProductView;











// import React, { useState } from 'react';
// import { Modal, Card, Rate, List, Avatar, Input, Button } from 'antd';
// import 'src\CSSfiles\ProductView.scss'

// const ProductQuickView = ({ product, visible, setVisible }) => {
//   const [review, setReview] = useState('');
//   const [rating, setRating] = useState(0);
//   const [reviews, setReviews] = useState(product.reviews);

//   const handleSubmit = () => {
//     if (!review) {
//       message.error('Please enter a review');
//       return;
//     }
//     if (!rating) {
//       message.error('Please rate the product');
//       return;
//     }
//     setReviews([
//       ...reviews,
//       {
//         rating,
//         review,
//         author: 'You',
//         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//       },
//     ]);
//     setReview('');
//     setRating(0);
//     message.success('Review submitted successfully');
//   };

//   return (
//     <Modal
//       title={product.name}
//       visible={visible}
//       onCancel={() => setVisible(false)}
//       footer={null}
//     >
//       <Card
//         cover={<img alt={product.name} src={product.image} />}
//         style={{ width: '100%' }}
//       >
//         <Card.Meta title={product.name} description={product.description} />
//         <h4>Price: {product.price}</h4>
//         <h4>Average rating: {product.rating}</h4>
//         <List
//           itemLayout="horizontal"
//           dataSource={reviews}
//           renderItem={(item) => (
//             <List.Item>
//               <List.Item.Meta
//                 avatar={<Avatar src={item.avatar} />}
//                 title={item.author}
//                 description={item.review}
//               />
//               <Rate disabled defaultValue={item.rating} />
//             </List.Item>
//           )}
//         />
//         <h4>Add your review</h4>
//         <Rate value={rating} onChange={(value) => setRating(value)} />
//         <Input.TextArea
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//           rows={4}
//         />
//         <Button type="primary" onClick={handleSubmit}>
//           Submit
//         </Button>
//       </Card>
//     </Modal>
//   );
// };

// export default ProductQuickView;



