function ButtonComponent() {
  return <button>Buy Now</button>;
}

function ProductItem() {
  return (
    <div>
      <h4>Product 1</h4>
      <ButtonComponent />
    </div>
  );
}

export default ProductItem;
