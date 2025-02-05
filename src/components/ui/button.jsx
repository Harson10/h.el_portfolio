import PropTypes from 'prop-types';

export function Button({ children, variant = "default", ...props }) {
    return <button className={`btn-${variant}`} {...props}>{children}</button>;
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
};