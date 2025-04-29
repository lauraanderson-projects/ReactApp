import ProductItem from "./components/product-item";
import "./style.css";

function ProductList({ listOfProducts }) {
  //dummyProductData){{
  return (
    <div>
      <h3 className="title">ECommerce Project</h3>
      {/*<ProductItem />*/}
      <ul>
        {listOfProducts.map((item, index) => (
          <ProductItem singleProductItem={item} key={index}></ProductItem>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
