import { SearchSection } from 'components/SearchSection';
import { Header } from 'components/Header';
import { InfoBlock } from 'components/InfoBlock';

export function HomePage() {
	return (
		<>
			<Header />
			<SearchSection />
			<div style={{ width: '334px', height: '132px' }}>
				<InfoBlock />
			</div>
		</>
	);
}
