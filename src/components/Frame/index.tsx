import { InfoBlock } from 'components/InfoBlock';
import {
	CardContainer,
	FrameContainer,
	ImageStyled,
} from 'components/Frame/styled';
import image from 'assets/image.png';
import { HeaderForSection } from 'components/HeaderForSection';
import { Pagination } from 'components/Pagination';

export function Frame() {
	return (
		<>
			<HeaderForSection />
			<FrameContainer>
				<CardContainer>
					<ImageStyled src={image} alt="no photo" />
					<InfoBlock />
				</CardContainer>
				<CardContainer>
					<ImageStyled src={image} alt="no photo" />
					<InfoBlock />
				</CardContainer>
				<CardContainer>
					<ImageStyled src={image} alt="no photo" />
					<InfoBlock />
				</CardContainer>
			</FrameContainer>
			<Pagination />
		</>
	);
}
