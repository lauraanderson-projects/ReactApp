import "./App.css";
import ClassBasedComponent from "./components/class-based-component";
import FunctionalComponent from "./components/functional-component";
import ProductList from "./components/products/index";

const dummyProductData = ["Product 1", "Product 2", "Product 3"];
function App() {
  return (
    <div>
      <h1>hello</h1>
      {/*<ClassBasedComponent />
      <FunctionalComponent />*/}
      <ProductList listOfProducts={dummyProductData} />
    </div>
  );
}

export default App;
