import { VerticalContainer } from 'components/SearchSection/styled';
import { MainTitle, OrangeText } from 'components/HeaderForSection/styled';

export function HeaderForSection() {
	return (
		<VerticalContainer>
			<OrangeText>Topics for you</OrangeText>
			<MainTitle>Our special gallery</MainTitle>
		</VerticalContainer>
	);
}
