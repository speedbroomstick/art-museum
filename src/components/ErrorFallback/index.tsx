import { AlertContainer, TryAgain, TextMessage } from './styled';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { FallbackProps } from 'react-error-boundary';

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	return (
		<>
			<Header />
			<AlertContainer>
				<h2>❗Something went wrong❗</h2>
				<TextMessage>
					<pre data-testid="errorText">{error.message}</pre>
				</TextMessage>
				<TryAgain onClick={resetErrorBoundary}>Try again</TryAgain>
			</AlertContainer>
			<Footer />
		</>
	);
}
