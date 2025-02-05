import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Typed from 'typed.js';

function TypedText({ strings, className }) {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        if (el.current) {
            typed.current = new Typed(el.current, {
                strings,
                typeSpeed: 50,
                backSpeed: 50,
                loop: true,
                cursorChar: '|',
            });
        }

        return () => {
            typed.current?.destroy();
        };
    }, [strings]);

    return <span ref={el} className={className} />;
}

TypedText.propTypes = {
    strings: PropTypes.arrayOf(PropTypes.string).isRequired,
    className: PropTypes.string
};

TypedText.defaultProps = {
    className: ''
};

export default TypedText;