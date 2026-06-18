import ProductCard from '../Component/ProductCard'
function Product({ data }) {
  console.log(data);
  
  return (
    <div>
      <div>
        {data && data?.map((el) => <ProductCard key={el.id} product={el} />)}
      </div>
    </div>
  )
  
}

export default Product