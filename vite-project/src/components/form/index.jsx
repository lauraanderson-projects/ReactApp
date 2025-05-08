import { useState } from "react";

function FormComponent() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleInputChange(event) {
    console.log(event);
    const { value } = event.target;
    setNameValue(value);
  }

  function handleEmailChange(event) {
    const { value } = event.target;
    setEmailValue(value);
  }

  function handleOnChange(event) {
    console.log(event.target.name);
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    //call the api and pass the name value
    console.log("Form submitted with name:", nameValue);
    console.log("Form submitted with email:", emailValue);
  }

  console.log(formData);

  return (
    <div>
      <h1>Form Component</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          value={formData.name}
          //  onChange={handleOnChange}
          onChange={(event) =>
            setFormData({
              ...formData,
              [event.target.name]: event.target.value,
            })
          }
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          value={formData.email}
          //  onChange={handleOnChange}
          onChange={(event) =>
            setFormData({
              ...formData,
              [event.target.name]: event.target.value,
            })
          }
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;
