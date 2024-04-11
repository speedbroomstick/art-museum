import { QueryStatus } from '@reduxjs/toolkit/query';
import { FrameContainerSection } from 'components/FrameContainerSection';
import { HeaderForSection } from 'components/HeaderForSection';
import { useAppSelector } from 'utils/hooks';

export function OtherWorks() {
	const paintings = useAppSelector((state) => state.paintings);
	return (
		<>
			<HeaderForSection
				orangeText="Here some more"
				mainTitle="Other works for you"
			/>
			<FrameContainerSection
				status={
					paintings.paintings.length
						? ('fulfilled' as QueryStatus)
						: ('pending' as QueryStatus)
				}
				paintings={paintings.paintings.slice(57, 66)}
				inset={true}
			/>
		</>
	);
}
