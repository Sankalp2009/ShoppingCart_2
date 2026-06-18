import { Routes, Route } from 'react-router'
import Dashboard from '../Pages/Dashboard'
import Cart from '../Pages/Cart'

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default AllRoutes