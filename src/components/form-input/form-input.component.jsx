import "./form-input.styles.scss";

const FormInput = ({ lable, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps}></input>
      {lable && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : null
          } form-input-label`}
        >
          {lable}
        </label>
      )}
    </div>
  );
};
export default FormInput;
