import { QueryStatus } from '@reduxjs/toolkit/query';
import { FrameContainerSection } from 'components/FrameContainerSection';
import { HeaderForSection } from 'components/HeaderForSection';
import { IDataForLocalStorage } from 'constants/IDataForLocalStorage';
import { useEffect, useState } from 'react';
import { HeaderText } from 'components/SearchSection/styled';
import bookMark from 'assets/svg/massiveBookMark.svg';
import { OrangeText, TextContainer } from './styled';

export function FavoriteSection() {
	const [items, setItems] = useState<IDataForLocalStorage[]>([]);
	useEffect(() => {
		const items = JSON.parse(localStorage.getItem('favoritePaintins')!);
		if (items) {
			setItems(items);
		}
	}, []);
	return (
		<>
			<TextContainer>
				<HeaderText>
					Here are your{' '}
					<OrangeText>
						<img src={bookMark} alt="" />
						Favorites
					</OrangeText>
				</HeaderText>
			</TextContainer>
			<HeaderForSection
				orangeText="Saved by you"
				mainTitle="Your favorites list"
			/>
			{items.length ? (
				<FrameContainerSection
					paintings={items}
					status={'fulfilled' as QueryStatus}
					inset={true}
				/>
			) : null}
		</>
	);
}
