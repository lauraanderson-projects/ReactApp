function ButtonComponent() {
  return <button>Buy Now</button>;
}

function ProductItem({ singleProductItem, key }) {
  return (
    <div key={key}>
      <h4>{singleProductItem}</h4>
      <ButtonComponent />
    </div>
  );
}

export default ProductItem;
