import classes from './SimpleButton.module.scss';

interface IconButtonProps {
    clickHandler: () => void;
    disabled?: boolean;
    text: string;
    variant?: 'blue' | 'green' | 'red';
}

const SimpleButton: React.FC<IconButtonProps> = ({
    clickHandler,
    disabled = false,
    text,
    variant = 'blue',
}) => {
    const buttonClasses = `${classes.button} ${disabled ? classes.disabled : classes[variant]}`;

    return (
        <button
            className={buttonClasses}
            disabled={disabled}
            onClick={clickHandler}
		>
            {text}
        </button>
    );
};

export default SimpleButton;
