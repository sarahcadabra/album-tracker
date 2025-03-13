import React from 'react';

interface props {
    onClick: () => void;
    cta: string
}
const Button: React.FC<props> = ({onClick, cta}) => {
    return (
        <button type={"button"} onClick={onClick}>
            {cta}
        </button>
    );
};

export default Button;