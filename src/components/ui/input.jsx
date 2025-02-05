import PropTypes from 'prop-types';

export function Input({ type = "text", ...props }) {
    return <input type={type} className="input-style" {...props} />;
}

Input.propTypes = {
    type: PropTypes.string,
};