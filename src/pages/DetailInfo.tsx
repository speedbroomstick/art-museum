import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useParams } from 'react-router-dom';
import { useGetPaintingsByIdsQuery } from 'store/api/api';
import { DetailInfoSection } from 'components/DetailInfoSection';

export function DetailInfo() {
	const params = useParams();
	const { data } = useGetPaintingsByIdsQuery({
		ids: [params.paintingId ? +params.paintingId : 8],
		limit: 1,
	});
	return (
		<>
			<Header />
			<DetailInfoSection data={data} />
			<Footer />
		</>
	);
}
