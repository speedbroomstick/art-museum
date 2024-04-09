import {
	HeaderText,
	Magnifier,
	OrangeSpan,
	VerticalContainer,
	FormStyled,
} from 'components/SearchSection/styled';
import magnifier from 'assets/svg/magnifier.svg';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { InputSearch } from 'components/InputSearch';
import { useActions } from 'utils/useActions';

const validationSchema = Yup.object().shape({
	searchInput: Yup.string()
		.max(20)
		.matches(/^[a-zA-Z0-9]+$/),
});

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
						<Magnifier src={magnifier} alt="" />
					</FormStyled>
				)}
			</Formik>
		</VerticalContainer>
	);
}
