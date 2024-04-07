import { SearchSection } from 'components/SearchSection';
import { Header } from 'components/Header';
import { Frame } from 'components/Frame';
import { Footer } from 'components/Footer';

export function HomePage() {
	return (
		<>
			<Header />
			<SearchSection />
			<Frame />
			<Footer />
		</>
	);
}
