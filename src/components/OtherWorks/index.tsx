import { FrameContainerSection } from 'components/FrameContainerSection';
import { HeaderForSection } from 'components/HeaderForSection';
import { useGetPaintings } from 'utils/useGetPaintings';

export function OtherWorks() {
	const { status, painting } = useGetPaintings(4, 9);
	return (
		<>
			<HeaderForSection
				orangeText="Here some more"
				mainTitle="Other works for you"
			/>
			<FrameContainerSection
				status={status}
				paintings={painting}
				inset={true}
			/>
		</>
	);
}
