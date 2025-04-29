import styles from "./product-item.module.css";

function ButtonComponent() {
  return <button className={styles.buttonStyle}>Buy Now</button>;
}

function ProductItem({ singleProductItem, key }) {
  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid grey",
        marginBottom: "10px",
        borderRadius: "10px",
      }}
      key={key}
    >
      <h4 className={styles.productTitle}>{singleProductItem}</h4>
      <ButtonComponent />
    </div>
  );
}

export default ProductItem;
