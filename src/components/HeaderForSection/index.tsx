import {
	ContainerForHeader,
	MainTitle,
	OrangeText,
} from 'components/HeaderForSection/styled';

export function HeaderForSection({
	orangeText,
	mainTitle,
}: {
	orangeText: string;
	mainTitle: string;
}) {
	return (
		<ContainerForHeader>
			<OrangeText>{orangeText}</OrangeText>
			<MainTitle>{mainTitle}</MainTitle>
		</ContainerForHeader>
	);
}
