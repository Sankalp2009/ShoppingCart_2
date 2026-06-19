import { ShoppingCart } from 'lucide-react'
import Search from './Search'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'
function Header({query, setQuery}) {
  const cart = useSelector((state) => state.Cart)
  const length = cart?.cart_data?.length || 0
  
  return (
    <div className="Header">
      <div>
        <Link to="/">
          <h3>Home</h3>
        </Link>
      </div>
      <div>
        <h3>About</h3>
      </div>
      <div>
        <Search query={query} setQuery={setQuery} />
      </div>
      <div className="cart-wrapper">
        <Link to={'/cart'}>
          <ShoppingCart className="cart-icon" />
          <span className="cart-count">{length}</span>
        </Link>
      </div>
    </div>
  )
}

export default Header
