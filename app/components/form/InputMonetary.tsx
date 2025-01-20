import classes from './InputMonetary.module.scss';
import { useId } from 'react';
import Label from '@components/form/Label';
import HelperText from '@components/form/HelperText';

interface InputMonetaryProps {
    disabled?: boolean;
    helperText?: string;
    label: string;
    name: string;
    required: boolean;
}

const InputMonetary: React.FC<InputMonetaryProps> = ({
    disabled = false,
    helperText = '',
    label,
    name,
    required = false,
}) => {
    const inputID = useId();
    const helperID = useId();

    return (
        <div className={classes.inputContainer}>
            <Label inputID={inputID} label={label} required={required} />
            <div className={classes.inputInnerContainer}>
                <div className={classes.inputAdornment}>$</div>
                <input
                    aria-invalid={false}
                    aria-describedby={helperID}
                    className={classes.input}
                    disabled={disabled}
                    id={inputID}
                    name={name}
                    required={required}
                    type='number'
                />
            </div>
            <HelperText helperID={helperID} helperText={helperText} />
        </div>
    );
};

export default InputMonetary;
