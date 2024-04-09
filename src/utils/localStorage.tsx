import { IDataForLocalStorage } from 'constants/IDataForLocalStorage';

export function addIntoLocalStorage(painting: IDataForLocalStorage) {
	const paintings = Array.from(
		JSON.parse(localStorage.getItem('favoritePaintins')!) ?? []
	);
	if (checkRepeatsRecord(paintings as IDataForLocalStorage[], painting))
		return true;
	localStorage.setItem(
		'favoritePaintins',
		JSON.stringify([...paintings, painting])
	);
}

export function checkRepeatsRecord(
	paintings: IDataForLocalStorage[],
	record: IDataForLocalStorage
) {
	return paintings.some((painting) => painting.id === record.id);
}
