import ProductItem from "./components/product-item";
import "./style.css";

function ProductList({ listOfProducts }) {
  const flag = true; // This can be a prop or state variable to toggle the heading

  //function renderTextBlock(getFlag) {
  //  return getFlag ? <h3>Heading Three</h3> : <h4>Heading Four</h4>;
  //}

  //const renderTextBlock = flag ? <h3>Heading Three</h3> : <h4>Heading Four</h4>;

  let renderTextBlock = null;
  if (flag) {
    renderTextBlock = <h3>Heading Three</h3>;
  } else {
    renderTextBlock = <h4>Heading Four</h4>;
  }

  return (
    <div>
      <h3 className="title">ECommerce Project</h3>
      {/*<ProductItem />*/}
      {renderTextBlock}
      <ul>
        {listOfProducts.map((item, index) => (
          <ProductItem singleProductItem={item} key={index}></ProductItem>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
