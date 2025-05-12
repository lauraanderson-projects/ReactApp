import { useState } from "react";
import { loginFormElements } from "../../config";
import CommonForm from "../common-form";

const initialFormData = {
  email: "",
  password: "",
};

function LoginComponent() {
  const [loginFormData, setLoginFormData] = useState(initialFormData);

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log("Login Form Data: ", loginFormData);

    //API logic goes here
    // Here you can handle the form submission, e.g., send the data to an API for authentication
    // For now, we'll just log the data to the console

    setLoginFormData(initialFormData);
  }

  return (
    <div>
      <h1>Login Component</h1>
      <CommonForm
        formData={loginFormData}
        setFormData={setLoginFormData}
        formControls={loginFormElements}
        buttonText={"Login"}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
}

export default LoginComponent;
