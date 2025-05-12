import { useState } from "react";
import { registerFormElements } from "../../config";
import CommonForm from "../common-form";

const initialRegisterFormData = {
  name: "",
  email: "",
  password: "",
};

function RegisterComponent() {
  const [registerFormData, setRegisterFormData] = useState(
    initialRegisterFormData
  );

  function handleRegisterOnSubmit(event) {
    event.preventDefault();

    // Here you can handle the form submission, e.g., send the data to an API for registration
    // For now, we'll just log the data to the console
    //API logic goes here
    console.log("Register Form Data: ", registerFormData);
    setRegisterFormData(initialRegisterFormData);
  }
  return (
    <div>
      <h1>Register component</h1>
      <CommonForm
        formControls={registerFormElements}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        buttonText={"Register"}
        onHandleSubmit={handleRegisterOnSubmit}
      />
    </div>
  );
}

export default RegisterComponent;
