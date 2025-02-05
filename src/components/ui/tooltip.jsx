import { PropTypes } from "prop-types";

export function TooltipProvider({ children }) {
    return <div className="tooltip-provider">{children}</div>;
}
TooltipProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export function TooltipTrigger({ children }) {
    return <span className="tooltip-trigger">{children}</span>;
}
TooltipTrigger.propTypes = {
    children: PropTypes.node.isRequired,
};

export function Tooltip({ children }) {
    return <div className="tooltip">{children}</div>;
}
Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
};

export function TooltipContent({ children }) {
    return <div className="tooltip-content">{children}</div>;
}
TooltipContent.propTypes = {
    children: PropTypes.node.isRequired,
};
