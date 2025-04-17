import ProductItem from "./components/product-item";

function ProductList({ dummyProductData }) {
  return (
    <div>
      <h3>ECommerce Project</h3>
      {/*<ProductItem />*/}

      {dummyProductData.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default ProductList;
