// CSS import
import ProductBox from "../../ProductBox/ProductBox";
import "./ProductList.css";

// Component import

function ProductList() {
  return (
    <div className="container">
      <div className="row">
        <h2 className="product-list-title text-center">All Products</h2>
        <div className="product-list-wrapper d-flex flex-row">
          {/* list of products */}
          <div className="product-list-box" id="productList">
           <ProductBox/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
