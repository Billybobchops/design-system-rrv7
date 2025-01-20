import { useState } from 'react';
import classes from './Checkboxes.module.scss';
import Fieldset from '@components/form/Fieldset';
import Checkbox from '@components/form/Checkbox';

interface CheckboxesProps {
    legend: string;
    options: { text: string; id: string; checked: boolean }[];
}

const Checkboxes: React.FC<CheckboxesProps> = ({ legend, options }) => {
    const [checkedItems, setCheckedItems] = useState(options);
    const handleChange = (index: number) => {
        setCheckedItems(
            checkedItems.map((item, curIndex) => {
                return curIndex === index
                    ? { ...item, checked: !item.checked }
                    : item;
            })
        );
    };

    return (
        <Fieldset legend={legend}>
			{checkedItems.map((item, i) => {
				return (
					<label key={item.id} className={classes.checkboxOption}>
						<Checkbox
							checked={item.checked}
							id={item.id}
							onChange={() => handleChange(i)}
						/>
						{item.text}
					</label>
				);
			})}
        </Fieldset>
    );
};

export default Checkboxes;
