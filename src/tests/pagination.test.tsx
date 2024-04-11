import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Pagination } from 'components/Pagination';
import { Theme } from 'constants/styles/Themes';
import { RouterProvider } from 'react-router-dom';
import { router } from 'constants/routing/router';
import { Provider } from 'react-redux';
import { store } from 'store/index';

it('Work pagination', () => {
	const { getByTestId } = render(
		<Provider store={store}>
			<Theme>
				<RouterProvider router={router}></RouterProvider>
				<Pagination offset={1} setOffset={() => null} total={2000} />
			</Theme>
		</Provider>
	);
	expect(getByTestId('pagDiv').children.length).toBe(4);
});
