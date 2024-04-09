import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from 'constants//styles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from 'store/index';
import { Theme } from 'constants/styles/Themes';
import { RouterProvider } from 'react-router-dom';
import { router } from 'constants/routing/router';

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
