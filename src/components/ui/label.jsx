import PropTypes from 'prop-types';

export function Label({ htmlFor, children }) {
    return <label htmlFor={htmlFor} className="label-style">{children}</label>;
}

Label.propTypes = {
    htmlFor: PropTypes.string,
    children: PropTypes.node.isRequired,
};