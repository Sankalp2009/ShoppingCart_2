import React from 'react'

function ProductCard({ product }) {
  
  const { id, thumbnail, title, price, category } = product;

  return (
    <div className="product-card">
      {/* Image */}

      <div className="product-image-wrapper">
        <img src={thumbnail} alt={title} className="product-image" />
      </div>

      {/* Content */}

      <div className="product-content">
        <h3 className="product-title">{title}</h3>

        <h3>
          <span style={{ color: 'red' }}>Category</span>: {category}
        </h3>

        <p className="product-price">₹ {Math.floor(price)}</p>
      </div>

     <button 
     className='add-cart-btn'
     >
      Add to cart
    </button>

    </div>
  )
}

export default ProductCard