import {
	HeaderStyled,
	HorizontalContainer,
	TopBar,
	YourFavorites,
} from './styled';
import museumLogo from 'assets/svg/museumLogo.svg';
import bookmark from 'assets/svg/bookMark.svg';

export function Header() {
	return (
		<HeaderStyled>
			<TopBar>
				<img src={museumLogo} alt="" />
				<HorizontalContainer>
					<img src={bookmark} alt="" />
					<YourFavorites href="#">Your favorites</YourFavorites>
				</HorizontalContainer>
			</TopBar>
		</HeaderStyled>
	);
}
