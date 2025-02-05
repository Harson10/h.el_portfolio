import PropTypes from 'prop-types';

export function Select({ children }) {
    return <div className="select-container">{children}</div>;
}
Select.propTypes = {
    children: PropTypes.node.isRequired,
};

export function SelectTrigger({ children }) {
    return <button className="select-trigger">{children}</button>;
}
SelectTrigger.propTypes = {
    children: PropTypes.node.isRequired,
};

export function SelectContent({ children }) {
    return <div className="select-content">{children}</div>;
}
SelectContent.propTypes = {
    children: PropTypes.node.isRequired,
};

export function SelectItem({ value, children }) {
    return <div className="select-item" data-value={value}>{children}</div>;
}
SelectItem.propTypes = {
    value: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export function SelectValue({ children }) {
    return <span className="select-value">{children}</span>;
}
SelectValue.propTypes = {
    children: PropTypes.node.isRequired,
};
