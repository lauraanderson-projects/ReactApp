import ProductItem from "./components/product-item";

function ProductList({ listOfProducts }) {
  //dummyProductData){{
  return (
    <div>
      <h3>ECommerce Project</h3>
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
