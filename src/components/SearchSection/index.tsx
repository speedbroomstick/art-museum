import {
	HeaderText,
	OrangeSpan,
	VerticalContainer,
	FormStyled,
} from 'components/SearchSection/styled';
import { Formik } from 'formik';
import { validationSchema } from 'constants/validation/validationScheme';
import { InputSearch } from 'components/InputSearch';
import { useActions } from 'utils/useActions';

export function SearchSection() {
	const { setValueSearch } = useActions();

	return (
		<VerticalContainer theme={{ marginTop: '5rem' }}>
			<HeaderText>
				Let's Find Some <OrangeSpan>Art</OrangeSpan> Here!
			</HeaderText>
			<Formik
				validationSchema={validationSchema}
				initialValues={{ searchInput: '' }}
				onSubmit={(values) => {
					setValueSearch(values.searchInput);
				}}
			>
				{({ handleChange, submitForm }) => (
					<FormStyled>
						<InputSearch
							name="searchInput"
							placeholder="Search Art, Artist, Work..."
							handleChange={handleChange}
							submitForm={submitForm}
						/>
					</FormStyled>
				)}
			</Formik>
		</VerticalContainer>
	);
}
