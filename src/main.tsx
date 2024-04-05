import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from 'pages/home';
import { GlobalStyles } from 'constants/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from 'store/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyles />
			<HomePage />
		</Provider>
	</React.StrictMode>
);
