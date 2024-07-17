import PropTypes from "react";

function Button({ text }) {
  return <button>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.required,
};

export default Button;
