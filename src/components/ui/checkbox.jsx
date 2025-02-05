import { PropTypes } from "prop-types"

export function Checkbox({ checked, onChange }) {
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="checkbox-style"
        />
    );
}

Checkbox.propTypes = {
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
};
