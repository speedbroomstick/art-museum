import { it, expect } from 'vitest';
import { InputSearch } from 'components/InputSearch';
import { Formik, Form } from 'formik';
import { validationSchema } from 'constants/validation/validationScheme';
import { fireEvent, render } from '@testing-library/react';
import { Theme } from 'constants/styles/Themes';
import { RouterProvider } from 'react-router-dom';
import { router } from 'constants/routing/router';
import { Provider } from 'react-redux';
import { store } from 'store/index';

it('Search input, validation', () => {
	const { getByPlaceholderText } = render(
		<Provider store={store}>
			<Theme>
				<RouterProvider router={router}></RouterProvider>
				<Formik
					validationSchema={validationSchema}
					initialValues={{ searchInput: '' }}
					onSubmit={(values) => {
						values.searchInput;
					}}
				>
					{({ handleChange, submitForm }) => (
						<Form>
							<InputSearch
								name="searchInput"
								handleChange={handleChange}
								placeholder="Something important"
								submitForm={submitForm}
							/>
						</Form>
					)}
				</Formik>
			</Theme>
		</Provider>
	);
	const inputSearch = getByPlaceholderText('Something important');
	fireEvent.change(inputSearch, { target: { value: 'Hello' } });
	expect(inputSearch.getAttribute('value')).toBe('Hello');
	expect(
		validationSchema.validateAt('searchInput', { searchInput: '||||/?' })
	).rejects.toBeTruthy();
	expect(
		validationSchema.validateAt('searchInput', { searchInput: 'Something' })
	).resolves.toBeTruthy();
});
