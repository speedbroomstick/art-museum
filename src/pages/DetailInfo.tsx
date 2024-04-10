import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useParams } from 'react-router-dom';
import { useGetPaintingsByIdsQuery } from 'store/api/api';
import { DetailInfoSection } from 'components/DetailInfoSection';
import { Loader } from 'components/FrameContainerSection/styled';
import loader from 'assets/svg/loader.svg';

export function DetailInfo() {
	const params = useParams();
	const { data, status } = useGetPaintingsByIdsQuery({
		ids: [params.paintingId ? +params.paintingId : 8],
		limit: 1,
	});
	const painting = data?.data[0];

	return (
		<>
			<Header />
			{status === 'fulfilled' && painting ? (
				<DetailInfoSection
					artist_display={painting.artist_display}
					artist_title={painting.artist_title}
					credit_line={painting.credit_line}
					date_display={painting.date_display}
					id={painting.id}
					image_id={painting.image_id}
					title={painting.title}
					is_public_domain={painting.is_public_domain}
					place_of_origin={painting.place_of_origin}
					dimensions={painting.dimensions}
				/>
			) : (
				<Loader>
					<img src={loader} alt="something went wrong" />
				</Loader>
			)}
			<Footer />
		</>
	);
}
