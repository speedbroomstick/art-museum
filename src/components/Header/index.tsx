import {
	HeaderStyled,
	HorizontalContainer,
	TopBar,
	LinkStyled,
	BurgerMenu,
	ContainerLinks,
} from './styled';
import museumLogo from 'assets/svg/museumLogo.svg';
import bookmark from 'assets/svg/bookMark.svg';
import home from 'assets/svg/home.svg';
import { ImageLogo } from 'components/Footer/styled';
import { useState } from 'react';

export function Header() {
	const [isNavigation, setIsNavigation] = useState(false);
	return (
		<HeaderStyled>
			<TopBar>
				<ImageLogo src={museumLogo} alt="" />
				{isNavigation ? (
					<ContainerLinks>
						<LinkStyled to={'/'}>
							<img src={home} />
							Home
						</LinkStyled>
						<LinkStyled to={'/favorites'}>
							<img src={bookmark} alt="" />
							Your favorites
						</LinkStyled>
					</ContainerLinks>
				) : null}
				<HorizontalContainer>
					<BurgerMenu
						$isNavigation={isNavigation}
						onClick={() => setIsNavigation(!isNavigation)}
					>
						<span></span>
						<span></span>
						<span></span>
					</BurgerMenu>
				</HorizontalContainer>
			</TopBar>
		</HeaderStyled>
	);
}
