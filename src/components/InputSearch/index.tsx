import { ErrorMessage as Error } from 'formik';
import { InputSearchField } from './styled';
import { useDebounce } from 'utils/useDebounce';
import { IInputSearchProps } from 'constants/IInputSearchProps';

export function InputSearch({
	name,
	placeholder,
	handleChange,
	submitForm,
}: IInputSearchProps) {
	const debounceSubmit = useDebounce(submitForm, 1000);

	return (
		<>
			<InputSearchField
				name={name}
				placeholder={placeholder}
				onChange={(e: React.ChangeEvent) => {
					handleChange(e);
					debounceSubmit();
				}}
			/>
			<Error name={name}>{(error) => <span>{error}</span>}</Error>
		</>
	);
}
