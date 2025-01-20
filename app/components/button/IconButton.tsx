import React from 'react';
import classes from './IconButton.module.scss';

interface IconButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
	icon?: React.ReactNode;
    variant?: 'blue' | 'green' | 'red';
}

const IconButton: React.FC<IconButtonProps> = ({
    clickHandler,
    disabled = false,
	icon,
    variant = 'blue',
}) => {
    const buttonClasses = `${classes.button} ${disabled ? classes.disabled : classes[variant]}`;

    return (
        <button
            className={buttonClasses}
            disabled={disabled}
            onClick={clickHandler}
		>
			{icon}
        </button>
    );
};

export default IconButton;
