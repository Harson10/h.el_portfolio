import PropTypes from 'prop-types';

export function Card({ children, className }) {
    return (
        <div className={`card ${className}`}>
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string, // Add this line
};

export function CardHeader({ children }) {
    return (
        <div className="card-header">
            {children}
        </div>
    );
}

CardHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

export function CardTitle({ children }) {
    return (
        <h2 className="card-title">
            {children}
        </h2>
    );
}

CardTitle.propTypes = {
    children: PropTypes.node.isRequired,
};

export function CardDescription({ children }) {
    return (
        <p className="card-description">
            {children}
        </p>
    );
}

CardDescription.propTypes = {
    children: PropTypes.node.isRequired,
};

export function CardContent({ children }) {
    return (
        <div className="card-content">
            {children}
        </div>
    );
}

CardContent.propTypes = {
    children: PropTypes.node.isRequired,
};

export function CardFooter({ children }) {
    return (
        <div className="card-footer">
            {children}
        </div>
    );
}

CardFooter.propTypes = {
    children: PropTypes.node.isRequired,
};
