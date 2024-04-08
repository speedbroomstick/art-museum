import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from 'pages/home';
import { GlobalStyles } from 'constants/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from 'store/index';
import { Theme } from 'constants/Themes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DetailInfo } from 'pages/DetailInfo';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/detailInfo/:paintingId',
		element: <DetailInfo />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<Theme>
				<GlobalStyles />
				<RouterProvider router={router}></RouterProvider>
			</Theme>
		</Provider>
	</React.StrictMode>
);
