import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
	searchInput: Yup.string()
		.max(20, 'The length must be less then 20 characters')
		.matches(
			/^[a-zA-Z0-9\s]+$/,
			'The special characters forbiden, allow only English'
		),
});
