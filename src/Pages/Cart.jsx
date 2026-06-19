import { useSelector } from 'react-redux'
import CartCard from '../Component/CartCard'
function Cart() {
  const cart = useSelector((state) => state.Cart)
  const cartData = cart?.cart_data || []
  const total = cartData.reduce((acc, { price }) => {
    return acc + Math.floor(price)
  }, 0)

  return (
    <div className="products-wrapper">
      <h1>total Price : {total}</h1>
      <div className="products-grid">
        {cartData?.map((el) => (
          <CartCard key={el.id} product={el} />
        ))}
      </div>
    </div>
  )
}

export default Cart
