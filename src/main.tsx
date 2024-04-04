import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from 'pages/home';
import { GlobalStyles } from 'constants/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalStyles />
		<HomePage />
	</React.StrictMode>
);
