import { IDataForLocalStorage } from 'constants/interfaces/IDataForLocalStorage';

export function addIntoLocalStorage(painting: IDataForLocalStorage) {
	const paintings = Array.from(
		JSON.parse(localStorage.getItem('favoritePaintins') ?? '{}')
	);
	localStorage.setItem(
		'favoritePaintins',
		JSON.stringify([...paintings, painting])
	);
}

export function isInLocalStorage(id: number) {
	const paintings: IDataForLocalStorage[] = Array.from(
		JSON.parse(localStorage.getItem('favoritePaintins') ?? '{}')
	);
	return paintings.some((painting) => painting.id === id);
}

export function deleteFromLocalStorage(id: number) {
	let paintings: IDataForLocalStorage[] = JSON.parse(
		localStorage.getItem('favoritePaintins')!
	);
	if (paintings) {
		paintings = paintings.filter((item) => item.id !== id);
		localStorage.setItem('favoritePaintins', JSON.stringify(paintings));
	}
}
