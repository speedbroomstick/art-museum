import { FooterDiv, FooterWrap, ImageLogo } from 'components/Footer/styled';
import modsenLogo from 'assets/svg/modsenLogo.svg';
import museumBlack from 'assets/svg/museumBlack.svg';

export function Footer() {
	return (
		<FooterWrap>
			<FooterDiv>
				<ImageLogo src={museumBlack} alt="" />
				<ImageLogo src={modsenLogo} alt="" />
			</FooterDiv>
		</FooterWrap>
	);
}
