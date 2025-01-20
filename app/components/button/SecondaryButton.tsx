import classes from './SecondaryButton.module.scss';

interface ButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
    text: string;
    variant?: 'blue' | 'green' | 'red';
}

const SecondaryButton: React.FC<ButtonProps> = ({
    clickHandler,
    disabled = false,
    text,
    variant = 'blue',
}) => {
    return (
        <button
            className={`${classes.button} ${variant ? classes[variant] : ''} ${disabled ? classes.disabled : ''}`}
            disabled={disabled}
            onClick={clickHandler}
		>
            {text}
        </button>
    );
};

export default SecondaryButton;
