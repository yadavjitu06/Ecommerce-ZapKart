// CSS imports
import CategoryItem from "../../CategoryItem/CategoryItem";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <h2 className="home-title text-center">Welcome to ZapKart</h2>
        <div
          className="category-list d-flex flex-row justify-content-between align-items-center"
          id="categoryList"
        >
          {/* <!-- List of categories --> */}

          <CategoryItem itemName="All products" />
        </div>
        <div className="category-title text-center">
          Select a category to start Shopping
        </div>
      </div>
    </div>
  );
}

export default Home;
