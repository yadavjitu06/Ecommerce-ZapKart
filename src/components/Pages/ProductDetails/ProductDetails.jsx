import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getProduct } from "../../../apis/fakeStoreProdApis";

function ProductDetails() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    async function downloadProducts(id) {
        try {
            const response = await axios.get(getProduct(id));
            setProduct(response.data);
        } catch (error) {
            console.error("Error fetching product:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        downloadProducts(id);
    }, [id]);

    function addProductToCart() {
        console.log("Product added to cart:", product);
        // Logic for adding product to cart
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        product && (
            <div className="container">
                <div className="row">
                    <div className="product-details-wrapper d-flex justify-content-between align-items-start flex-row">
                        <div className="product-img d-flex">
                            <img
                                src={product.image || "placeholder.jpg"}
                                alt="product image"
                                id="product-img"
                            />
                        </div>

                        <div className="product-details-box d-flex flex-column">
                            <div id="productDetails">
                                <div className="product-name" id="product-name">{product.title}</div>
                                <div className="product-price fw-bold" id="product-price">${product.price}</div>
                                <div className="product-description">
                                    <div className="product-description-title fw-bold">Description</div>
                                    <div className="product-description-data" id="product-description-data">
                                        {product.description}
                                    </div>
                                </div>
                            </div>

                            <div
                                className="product-details-action btn btn-primary text-decoration-none"
                                onClick={addProductToCart}
                            >
                                Add to cart
                            </div>
                            <a
                                href="/cart"
                                id="goToCartBtn"
                                className="product-details-action btn btn-warning text-decoration-none"
                            >
                                Go to cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default ProductDetails;
