import { it, expect } from 'vitest';
import { ErrorFallback } from 'components/ErrorFallback';
import { Header } from 'components/Header';
import { fireEvent, render } from '@testing-library/react';
import { Theme } from 'constants/styles/Themes';
import { RouterProvider } from 'react-router-dom';
import { router } from 'constants/routing/router';
import { Provider } from 'react-redux';
import { store } from 'store/index';

it('Must show Error message', async () => {
	const { getByTestId } = render(
		<Theme>
			<ErrorFallback
				error={new Error('Error in code')}
				resetErrorBoundary={() => null}
			/>
		</Theme>
	);
	expect(getByTestId('errorText').innerText).toBe('Error in code');
});

it('Working burger menu', async () => {
	const { getAllByTestId, getByText, queryByText } = render(
		<Provider store={store}>
			<Theme>
				<RouterProvider router={router}></RouterProvider>
				<Header />
			</Theme>
		</Provider>
	);
	fireEvent.click(getAllByTestId('burgerMenu')[0]);
	expect(queryByText('Home')).toBe(getByText('Home'));
	fireEvent.click(getAllByTestId('burgerMenu')[0]);
	expect(queryByText('Home')).toBe(null);
});
