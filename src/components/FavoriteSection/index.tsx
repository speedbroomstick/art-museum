import { QueryStatus } from '@reduxjs/toolkit/query';
import { FrameContainerSection } from 'components/FrameContainerSection';
import { HeaderForSection } from 'components/HeaderForSection';
import { IDataForLocalStorage } from 'constants/IDataForLocalStorage';
import { useEffect, useState } from 'react';

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
