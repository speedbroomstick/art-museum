import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Pagination } from 'components/Pagination';
import { IPagination as IPaginationType } from 'constants/interfaces/IPaintinsAnswer';
import { Theme } from 'constants/styles/Themes';
import { RouterProvider } from 'react-router-dom';
import { router } from 'constants/routing/router';
import { Provider } from 'react-redux';
import { store } from 'store/index';

const paginationData: IPaginationType = {
	total: 100,
	limit: 10,
	offset: 10,
	total_pages: 20,
	current_page: 10,
};

it('Work pagination', () => {
	const { getByTestId } = render(
		<Provider store={store}>
			<Theme>
				<RouterProvider router={router}></RouterProvider>
				<Pagination paginationData={paginationData} setPage={() => null} />
			</Theme>
		</Provider>
	);
	expect(getByTestId('pagDiv').children.length).toBe(7);
});
