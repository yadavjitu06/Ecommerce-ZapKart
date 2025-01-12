// CSS import
import { useEffect, useState } from "react";
import ProductBox from "../../ProductBox/ProductBox";
import FilterProducts from "../../FilterProduct/FilterProduct";
import "./ProductList.css";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import {
  getAllProducts,
  getAllProductsByCategory,
} from "../../../apis/fakeStoreProdApis";

function ProductList() {
  const [productList, setProductList] = useState(null);
  const [query] = useSearchParams();

  async function downloadProducts(category) {
    try {
      const downloadurl = category
        ? getAllProductsByCategory(category)
        : getAllProducts();
      const response = await axios.get(downloadurl);
      setProductList(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    downloadProducts(query.get("category")); // Fixed the extra space
  }, [query.get("category")]); // Added `query` as a dependency

  return (
    <div className="container">
      <div className="row">
        <h2 className="product-list-title text-center">All Products</h2>
        <div className="product-list-wrapper d-flex flex-row">
          <FilterProducts />
          <div className="product-list-box" id="productList">
            {productList &&
              productList.map((product) => (
                <ProductBox
                productId={product.id}
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
