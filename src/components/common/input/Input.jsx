const Input = ({
  label,
  description,
  error,
  required = false,
  variant,
  size = "sm",
  rad = "sm",
  icon: Icon,
  ...props
}) => {
  return (
    <div className="input">
      <div>
        {label && (
          <label className={`label size-${size}`}>
            {label}
            {required && <span className="red"> *</span>}
          </label>
        )}
        {description && (
          <label className={`label size-${size}`}>{description}</label>
        )}

        <div style={{ position: "relative" }}>
          {Icon && (
            <div className="icon">
              <Icon size={16} />
            </div>
          )}
          <input
            className={`size-${size} radius-${rad} ${
              error ? "inputError" : `inp ${variant}`
            }`}
            {...props}
          />
        </div>
        {error && <label className={`label red size-${size}`}>{error}</label>}
      </div>
    </div>
  );
};

export default Input;
