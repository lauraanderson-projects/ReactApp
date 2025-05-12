import CommonInput from "../common-input";

const formTypes = {
  INPUT: "input",
  SELECT: "select",
  CHECKBOX: "checkbox",
  RADIO: "radio",
  TEXTAREA: "textarea",
};

function CommonForm({
  formControls = [],
  formData,
  setFormData,
  buttonText,
  onHandleSubmit,
}) {
  // This component is a reusable form component that takes in props for form controls, form data, setFormData function, and button text.
  // It renders a form with the specified controls, allowing for dynamic form generation based on the provided formControls array.
  // The formControls array contains objects that define the properties of each form element, such as label, name, id, placeholder, and componentType.
  // The formData prop holds the current values of the form fields, and the setFormData function is used to update the form data state.
  // The buttonText prop allows for customization of the submit button text.
  function renderFormElement(getCurrentElement) {
    let content = null;
    switch (getCurrentElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            type={getCurrentElement.type}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name] || ""}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            type={getCurrentElement.type}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name] || ""}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return content;
  }

  return (
    <form onSubmit={onHandleSubmit}>
      {formControls?.length
        ? formControls.map((singleFormElementItem) =>
            renderFormElement(singleFormElementItem)
          )
        : null}
      <div style={{ marginTop: "20px" }}>
        <button type="submit">{buttonText || "Submit"}</button>
      </div>
    </form>
  );
}

export default CommonForm;
