// CSS import
import { useEffect, useState } from "react";
import ProductBox from "../../ProductBox/ProductBox";
import FilterProducts from '../../FilterProduct/FilterProduct'
import "./ProductList.css";
import axios from "axios";

function ProductList() {
  const [productList, setProductList] = useState(null);

  async function downloadProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProductList(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    downloadProducts();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h2 className="product-list-title text-center">All Products</h2>
        <div className="product-list-wrapper d-flex flex-row">
          
        <FilterProducts/>
          <div className="product-list-box" id="productList">
            {productList &&
              productList.map((product) => (
                <ProductBox
                  key={product.id}
                  name={product.title}
                  price={product.price}
                  productImage={product.image}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
