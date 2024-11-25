import "./App.css";

import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const pageLimit = 9;
  const fetchProducts = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=50`);
      const data = await res.json();

      if (data?.products) {
        setProducts(data.products);
        setTotalPages(
          data.products.length % pageLimit === 0
            ? parseInt(data.products.length / pageLimit)
            : parseInt(data.products.length / pageLimit) + 1
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const listOfProducts = products.slice(
    (page - 1) * pageLimit,
    page * pageLimit
  );
  return (
    <div className="app">
      <div className="products">
        {listOfProducts.map((product) => {
          return (
            <div key={product.id} className="product">
              <h1>{product.title}</h1>
              <img src={product.images?.[0]} alt={product.title} />
            </div>
          );
        })}
      </div>

      <div className="pagination">
        {Array(totalPages)
          .fill(0)
          .map((_, index) => {
            return (
              <span
                onClick={() => setPage(index + 1)}
                key={index}
                className={page === index + 1 ? "active" : ""}
              >
                {index + 1}
              </span>
            );
          })}
      </div>
    </div>
  );
}

export default App;
