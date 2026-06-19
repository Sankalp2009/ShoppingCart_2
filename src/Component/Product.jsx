import ProductCard from '../Component/ProductCard'
function Product({ data }) {
  
  return (
    <div className="product-wrapper">
      <div className="product-grid">
        {data && data?.map((el) => <ProductCard key={el.id} product={el} />)}
      </div>
    </div>
  )
  
}

export default Product