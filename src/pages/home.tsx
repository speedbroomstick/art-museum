import { SearchSection } from 'components/SearchSection';
import { Header } from 'components/Header';
import { GallerySection } from 'components/GallerySection';
import { Footer } from 'components/Footer';
import { OtherWorks } from 'components/OtherWorks';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'components/ErrorFallback';

export function HomePage() {
	return (
		<>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<Header />
				<SearchSection />
				<GallerySection />
				<OtherWorks />
				<Footer />
			</ErrorBoundary>
		</>
	);
}
