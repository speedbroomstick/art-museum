import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		orange: 'rgb(224, 164, 73);',
		black: 'rgb(57, 57, 57)',
	},
};

export const Theme = ({ children }: { children: ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
