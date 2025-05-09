function CommonInput({ label, name, id, placeholder, value, onChange, type }) {
  // This component is a reusable input field that takes in props for label, name, id, placeholder, value, and onChange function.
  // It renders a label and an input field, where the input field's value is controlled by the value prop and updates via the onChange function.
  // The label is associated with the input field through the htmlFor attribute, which matches the id of the input field.
  // The placeholder prop provides a hint to the user about what to enter in the input field.
  // The onChange function is called whenever the value of the input field changes, allowing for controlled component behavior.
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <input
        name={name}
        id={id}
        placeholder={placeholder || "Enter value here"}
        value={value}
        onChange={onChange}
        type={type || "text"}
      />
    </div>
  );
}

export default CommonInput;
