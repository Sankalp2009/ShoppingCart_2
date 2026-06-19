import { Routes, Route } from 'react-router'
import Dashboard from '../Pages/Dashboard'
import Cart from '../Pages/Cart'

function AllRoutes({ query }) {
  return (
    <Routes>
      <Route path="/" element={<Dashboard query={query} />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default AllRoutes