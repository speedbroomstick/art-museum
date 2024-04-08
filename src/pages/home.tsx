import { SearchSection } from 'components/SearchSection';
import { Header } from 'components/Header';
import { GallerySection } from 'components/GallerySection';
import { Footer } from 'components/Footer';
import { OtherWorks } from 'components/OtherWorks';

export function HomePage() {
	return (
		<>
			<Header />
			<SearchSection />
			<GallerySection />
			<OtherWorks />
			<Footer />
		</>
	);
}
