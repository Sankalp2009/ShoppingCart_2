import { useDispatch } from 'react-redux'
import { Action_Type } from '../Redux/cart_reducer/Action'
import { Trash2 } from 'lucide-react'
function CartCard({ product }) {
  const { id, thumbnail, title, price, category } = product
  const dispatch = useDispatch()

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

        <Trash2
          onClick={() => {
            dispatch({
              type: Action_Type.Remove_Cart,
              payload: id,
            })
          }}
        />
      </div>
    </div>
  )
}

export default CartCard