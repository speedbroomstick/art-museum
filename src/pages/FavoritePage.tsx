import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { FavoriteSection } from 'components/FavoriteSection';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'components/ErrorFallback';

export function FavoritePage() {
	return (
		<>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<Header />
				<FavoriteSection />
				<Footer />
			</ErrorBoundary>
		</>
	);
}
