import { it, expect, vi } from 'vitest';
import { FavoriteButton } from 'components/FavoriteButton';
import { fireEvent, render } from '@testing-library/react';
import { Theme } from 'constants/styles/Themes';
import { RouterProvider } from 'react-router-dom';
import { router } from 'constants/routing/router';
import { Provider } from 'react-redux';
import { store } from 'store/index';

const dataForFavorite = {
	id: 10,
	artist_title: 'something',
	image_id: 'url',
	is_public_domain: true,
	title: 'King portret',
};

const localStorageMock = {
	getItem: vi.fn(),
	setItem: vi.fn(),
	clear: vi.fn(),
};
global.localStorage = localStorageMock as unknown as Storage;

it('Search input, validation', () => {
	const { getByTestId } = render(
		<Provider store={store}>
			<Theme>
				<RouterProvider router={router}></RouterProvider>
				<FavoriteButton data={dataForFavorite} />
			</Theme>
		</Provider>
	);
	fireEvent.click(getByTestId('favoriteBut'));
	expect(localStorageMock.setItem).toHaveBeenCalled();
	expect(localStorageMock.setItem).toHaveBeenCalledWith(
		'favoritePaintins',
		JSON.stringify([dataForFavorite])
	);
});
