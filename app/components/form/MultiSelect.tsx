import React, { useState, useEffect, useRef, useMemo } from 'react';
import classes from './MultiSelect.module.scss';
import { useId } from 'react';
import Label from './Label';
import SelectAllCheckbox from '@components/form/SelectAllCheckbox';
import Checkbox from '@components/form/Checkbox';
import Chip from '@components/Chip';
import HelperText from '@components/form/HelperText';
import SimpleButton from '@components/button/SimpleButton';
import { Chevron } from '@components/Icon';

interface MultiSelectOption {
    value: string;
}

interface MultiSelectProps {
    disabled?: boolean;
    helperText?: string;
    label: string;
    name: string;
    onChange: (selectedValues: string[]) => void;
    options: MultiSelectOption[];
    placeholder?: string;
    required?: boolean;
    selectedValues: string[];
}

const MultiSelect: React.FC<MultiSelectProps> = ({
    disabled = false,
    helperText = '',
    label,
    name,
    onChange,
    options,
    placeholder = 'Select options...',
    required = false,
    selectedValues,
}) => {
    const selectID = useId();
    const helperID = useId();
    const [isOpen, setIsOpen] = useState(false);
	const [isInputActive, setIsInputActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
	const containerRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);
	const isEmpty = selectedValues.length === 0;
	const isAllSelected = selectedValues.length === options.length;

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
		setIsInputActive(event.target.value !== '');
    };

    const handleCheckboxChange = (value: string) => {
        const newSelectedValues = selectedValues.includes(value)
            ? selectedValues.filter(v => v !== value)
            : [...selectedValues, value];
        onChange(newSelectedValues);
    };

	const handleRemoveChip = (chipValue: string) => {
		const newSelectedValues = selectedValues.filter(value => value !== chipValue);
		onChange(newSelectedValues);
	};

    const handleToggleOpen = () => {
        setIsOpen(!isOpen);
        if (!isOpen && searchRef.current) searchRef.current.focus();
    };

	const handleToggleAll = () => {
		const newSelectedValues = isAllSelected ? [] : options.map(option => option.value);
		onChange(newSelectedValues);
	};

	const filteredOptions = useMemo(() => 
        options.filter(option => 
            option.value.toLowerCase().includes(searchTerm.toLowerCase())
        ), 
        [searchTerm, options]
    );

	const buttonText = selectedValues.length > 0 ? `${selectedValues.length} selected` : placeholder;
	

	useEffect(() => {
        const handleClose = (event: KeyboardEvent | MouseEvent) => {
            if (event instanceof KeyboardEvent && event.key === 'Escape') setIsOpen(false);
            if (event instanceof MouseEvent && containerRef.current && 
                !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleClose);
        document.addEventListener('mousedown', handleClose);

        return () => {
            window.removeEventListener('keydown', handleClose);
            document.removeEventListener('mousedown', handleClose);
        };
    }, []);

    return (
        <div className={classes.multiSelectContainer} ref={containerRef}>
            <Label inputID={selectID} label={label} required={required} />
            <div className={classes.chevronPositioning}>
                <button
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                    className={classes.multiSelectButton}
                    disabled={disabled}
                    onClick={handleToggleOpen}
                    type="button"
                >
					<input
						aria-label="Search options"
						className={classes.multiSelectSearch}
    					onBlur={() => setIsInputActive(searchTerm !== '')}
						onChange={handleSearchChange}
						placeholder={buttonText}
						ref={searchRef}
						type="text"
						value={searchTerm}
					/>
					<span aria-hidden="true" className={isOpen ? classes.activeChevron : ''}>
						<Chevron fill={'var(--utility-neutral-70)'} />
					</span>
                </button>

                {isOpen && (
                    <div className={classes.multiSelectDropdown} role="listbox">
                        <ul className={classes.multiSelectList}>
							<li className={`${classes.multiSelectItem} ${classes.selectAll}`}>
								<label>
									<SelectAllCheckbox
										checked={isAllSelected}
										onChange={handleToggleAll}
										id={'Select All'}
										partialCheck={!isEmpty && !isAllSelected}
									/>
									Select All
								</label>
							</li>

                            {filteredOptions.map((option, i) => (
                                <li className={`${classes.multiSelectItem} ${isInputActive && i === 0 ? classes.hoverActive : ''}`} key={option.value}>
                                    <label>
                                        <Checkbox
                                            checked={selectedValues.includes(option.value)}
                                            disabled={disabled}
                                            onChange={() => handleCheckboxChange(option.value)}
                                            id={option.value}
                                        />
                                        {option.value}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <HelperText helperID={helperID} helperText={helperText} />
			
			<div className={classes.chipContainer}>
				{selectedValues.length > 0 && selectedValues.map((chip) => {
					return <Chip title={chip} key={chip} onRemove={() => handleRemoveChip(chip)} />
				})}
				
				{selectedValues.length > 0 && (
                    <div className={classes.cancelLink}>
                    	<SimpleButton text="Clear All" clickHandler={() => onChange([])} />
                	</div>
                )}
			</div>
        </div>
    );
};

export default MultiSelect;
