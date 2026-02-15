import { data } from "../data"
import ProductCard from "./ProductCard"

const ProductList = () => {
    let items = data
    // console.log(items);
    
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {items.map((product) => (
        // console.log(product)
        
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
