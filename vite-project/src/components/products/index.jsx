import { use, useEffect, useState } from "react";
import ProductItem from "./components/product-item";
import "./style.css";

const initialState = true;

function ProductList({ listOfProducts }) {
  const [flag, setFlag] = useState(initialState);
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);

  function handleToggleText() {
    setFlag(!flag);
  }
  function handleIncreaseCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    setFlag(!flag);
    console.log("Component mounted or updated");

    return () => {
      console.log("component unmounted");
    };
  }, []); // This effect runs only once when the component mounts (page loads once)

  useEffect(() => {
    if (count === 10) {
      setChangeStyle(true);
    }
  }, [count]); // This effect runs whenever the count changes

  console.log(changeStyle);

  return (
    <div>
      <h3 className="title">ECommerce Project</h3>
      <button onClick={handleToggleText}>Toggle Text</button>
      {/*<ProductItem />*/}

      {flag ? <h3>Heading Three</h3> : <h4>Heading Four</h4>}
      <button
        style={{ color: changeStyle ? "red" : "black" }}
        onClick={handleIncreaseCount}
      >
        Increment Count
      </button>
      <div>Count is {count}</div>
      <ul>
        {listOfProducts.map((item, index) => (
          <ProductItem singleProductItem={item} key={index}></ProductItem>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
