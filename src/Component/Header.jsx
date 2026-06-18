import { ShoppingCart } from 'lucide-react'
import Search from './Search'
function Header() {
  return (
    <div className="Header">
      <div>
        <h3>Home</h3>
      </div>
      <div>
        <h3>About</h3>
      </div>
      <div>
        <Search />
      </div>
      <div>
        <ShoppingCart />
      </div>
    </div>
  )
}

export default Header