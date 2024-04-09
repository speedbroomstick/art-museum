import { DetailInfo } from 'pages/DetailInfo';
import { FavoritePage } from 'pages/FavoritePage';
import { HomePage } from 'pages/home';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/detailInfo/:paintingId',
		element: <DetailInfo />,
	},
	{
		path: '/favorites',
		element: <FavoritePage />,
	},
]);
