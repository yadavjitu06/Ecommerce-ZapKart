// CSS imports
import { useEffect, useState } from "react";
import CategoryItem from "../../CategoryItem/CategoryItem";
import "./Home.css";
import { getAllCategories } from "../../../apis/fakeStoreProdApis";
import axios from 'axios'

function Home() {
  const [categories, setCategories] = useState(null);

  async function downloadCategories() {
    const responce = await axios.get(getAllCategories());
    setCategories(responce.data);
  }

  useEffect(() => {
    downloadCategories()
  }, []);
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
          {categories &&
            categories.map((category) => (
              <CategoryItem itemName={category} key={category} filter={category} />
            ))}
        </div>
        <div className="category-title text-center">
          Select a category to start Shopping
        </div>
      </div>
    </div>
  );
}

export default Home;
