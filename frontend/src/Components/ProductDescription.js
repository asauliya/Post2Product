import React, {useEffect} from 'react';
import './ProductDescription.css'; // Import external styles for better structure
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductDescription = () => {
  const generated = useSelector((state) => state.generated);

    const navigate = useNavigate();
  
    useEffect(() => {
      if (generated.title == 0 || generated.description==0) {
        navigate("/");
      }
    }, []);

  // Sample product data
  const product = {
    id: 1,
    name: "ITC Sunfeast Baked Creations offers a delightful range of gourmet delights",
    description: "ITC Sunfeast Baked Creations offers a delightful range of gourmet delights, perfect for the festive season. Our gift boxes feature a variety of sweet treats, including crispy gingerbread cookies, indulgent Christmas spice croissants, traditional plum cake, and artisanal truffle and fudge boxes. Each box is filled with a little bit of all our delicious treats, making them an ideal way to spread joy and love this holiday season. With a range of options to choose from, you're sure to find the perfect gift for your friends and loved ones. Our products are made with high-quality ingredients and are designed to bring a smile to everyone's face. Order now and make this holiday season extra special.",
    price: 129.99,
    rating: 4.5,
    reviews: 145,
    availableStock: 20,
    features: [
      "Bluetooth 5.0 Connectivity",
      "Active Noise Cancellation",
      "20-Hour Battery Life",
      "Lightweight & Comfortable Design",
    ],
  };

  return (
    <div className="product-container">
      <div className="product-details">
        <h1 className="product-name">{generated.title}</h1>
        <p className="product-description">{generated.description}</p>
        <p className="product-price">Price: ${product.price.toFixed(2)}</p>
        <div className="product-rating">
          <span>Rating: {product.rating} / 5</span>
          <span>({product.reviews} reviews)</span>
        </div>
        <ul className="product-features">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDescription;
