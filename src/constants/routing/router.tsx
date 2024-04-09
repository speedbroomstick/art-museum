import { DetailInfo } from 'pages/DetailInfo';
import { FavoritePage } from 'pages/FavoritePage';
import { HomePage } from 'pages/home';
import { createBrowserRouter } from 'react-router-dom';
import { ErrorFallback } from 'components/ErrorFallback';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: (
			<ErrorFallback
				error={new Error("This url-path dosn't exist!")}
				resetErrorBoundary={() => null}
			/>
		),
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
