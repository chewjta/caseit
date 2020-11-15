import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "../Product/Product";
import { db } from "../../firebase";
import Fuse from "fuse.js";

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tempProducts, setTempProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        setProducts(allContent);
        setTempProducts(allContent);
      })
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    const fuse = new Fuse(products, {
      keys: ["title"],
      threshold: 0.1,
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (products.length > 0 && searchTerm.length > 2 && results.length > 0) {
      setProducts(results);
    } else {
      setProducts(tempProducts);
    }
  }, [searchTerm]);

  console.log(searchTerm);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cdn.shopify.com/s/files/1/2033/6501/files/BANNERR_2048x.jpg?v=1548356908"
          alt="home image"
        />
        <div className="search">
          <input
            type="text"
            placeholder="Search for a design..."
            value={searchTerm}
            onChange={({ target }) => setSearchTerm(target.value)}
          />
        </div>
        <div className="container">
          {products.map((item) => (
            <div className="item">
              <Product
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
