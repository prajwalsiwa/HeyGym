interface inputPropsTypes {
  label: string;
}

function Input({ label }: inputPropsTypes) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} className="" />
    </div>
  );
}

export default Input;
