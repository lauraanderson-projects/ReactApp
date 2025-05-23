import "./App.css";
import ClassBasedComponent from "./components/class-based-component";
import FunctionalComponent from "./components/functional-component";
import ProductList from "./components/products/index";
import Users from "./components/users/index";
import ContextButtonComponent from "./components/context-concept/button";
import ContextTextComponent from "./components/context-concept/text";
import UseReducerExample from "./components/use-reducer-example";
import FormComponent from "./components/form/index";
import LoginComponent from "./components/login/index";
import RegisterComponent from "./components/register/index";

const dummyProductData = ["Product 1", "Product 2", "Product 3"];
function App() {
  return (
    <div>
      <h1>hello</h1>
      {/*<ClassBasedComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<ProductList listOfProducts={dummyProductData} />*/}
      {/*<Users />*/}
      {/*<UseReducerExample />*/}
      {/*<ContextButtonComponent />
      <ContextTextComponent />*/}
      {/*<FormComponent />*/}
      <div style={{ display: "flex", gap: "20px" }}>
        <LoginComponent />
        <RegisterComponent />
      </div>
    </div>
  );
}

export default App;
