import './ProductItem.css'


function ProductList({ product }) {
    return (
       
                <div className="product-item">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <button>Add to Cart</button>
                </div>
            )}
        
    

export default ProductList;