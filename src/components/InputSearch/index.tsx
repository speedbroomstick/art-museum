import { ErrorMessage as Error } from 'formik';
import { InputSearchField, InputWrap, Magnifier, SpanEror } from './styled';
import { useDebounce } from 'utils/useDebounce';
import { IInputSearchProps } from 'constants/interfaces/IInputSearchProps';
import magnifier from 'assets/svg/magnifier.svg';
import { SortButton } from 'components/SortButton';

export function InputSearch({
	name,
	placeholder,
	handleChange,
	submitForm,
}: IInputSearchProps) {
	const debounceSubmit = useDebounce(submitForm, 1000);

	return (
		<>
			<InputWrap>
				<InputSearchField
					name={name}
					placeholder={placeholder}
					onChange={(e: React.ChangeEvent) => {
						handleChange(e);
						debounceSubmit();
					}}
				/>
				<Magnifier src={magnifier} alt="" />
				<SortButton />
			</InputWrap>
			<Error name={name}>{(error) => <SpanEror>*{error}</SpanEror>}</Error>
		</>
	);
}
