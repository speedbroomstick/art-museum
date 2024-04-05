import { InfoBlock } from 'components/InfoBlock';
import { CardContainer, FrameContainer } from 'components/Frame/styled';
import image from 'assets/image.png';

export function Frame() {
	return (
		<FrameContainer>
			<CardContainer>
				<img src={image} alt="no photo" />
				<InfoBlock />
			</CardContainer>
			<CardContainer>
				<img src={image} alt="no photo" />
				<InfoBlock />
			</CardContainer>
			<CardContainer>
				<img src={image} alt="no photo" />
				<InfoBlock />
			</CardContainer>
		</FrameContainer>
	);
}
