// import classes from './DatePicker.module.scss';
// import { DatePicker } from '@mui/x-date-pickers';
// import { useId } from 'react';
// import Label from '@components/form/Label';
// import HelperText from '@components/form/HelperText';

// interface DatePickerInputProps {
//     label: string;
// 	helperText?: string;
//     required: boolean;
// }

// const DatePickerInput: React.FC<DatePickerInputProps> = ({
//     label,
// 	helperText = '',
//     required,
// }) => {
//     const inputID = useId();
//     const helperID = useId();

//     return (
//         <div className={classes.inputContainer}>
//             <Label inputID={inputID} label={label} required={required} />
//             <DatePicker
// 				slotProps={{ textField: { fullWidth: true, placeholder: '' } }}
//                 sx={{
// 					'& .MuiInputBase-root': {
// 						border: '1px solid var(--utility-neutral-50)',
// 						margin: '6px 6px 6px 0',
// 						width: '100%',
// 					},
// 					'& .MuiInputBase-root:hover': {
// 						border: '1px solid var(--theme-a-3)',
// 					},
// 					'& .MuiOutlinedInput-input:focus-visible': {
// 						border: '2px solid var(--theme-a-3)',
// 					},
// 					'& .MuiOutlinedInput-input': {
// 						padding: 'var(--spacing-xs) 0 var(--spacing-xs) var(--spacing-s)',
// 					},
// 					'& .MuiOutlinedInput-notchedOutline': {
// 						border: 'none',
// 					},
// 				}}
//             />
//             <HelperText
//                 helperID={helperID}
//                 helperText={helperText}
//             />
//         </div>
//     );
// };

// export default DatePickerInput;
