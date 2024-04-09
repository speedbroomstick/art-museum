import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useParams } from 'react-router-dom';
import { useGetPaintingsByIdsQuery } from 'store/api/api';
import { DetailInfoSection } from 'components/DetailInfoSection';
import { Loader } from 'components/FrameContainerSection/styled';
import loader from 'assets/svg/loader.svg';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'components/ErrorFallback';

export function DetailInfo() {
	const params = useParams();
	const { data, status } = useGetPaintingsByIdsQuery({
		ids: [params.paintingId ? +params.paintingId : 8],
		limit: 1,
	});
	return (
		<>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<Header />
				{status === 'fulfilled' && data ? (
					<DetailInfoSection data={data} />
				) : (
					<Loader>
						<img src={loader} alt="something went wrong" />
					</Loader>
				)}
				<Footer />
			</ErrorBoundary>
		</>
	);
}
