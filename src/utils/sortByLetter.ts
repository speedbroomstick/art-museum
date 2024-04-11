import { IDaum as IPainting } from 'constants/interfaces/IPaintingByIdAnswer';

export function sortByLetter(paintings: IPainting[], isActive: boolean) {
	return [...paintings].sort((a, b) =>
		isActive ? b.title.localeCompare(a.title) : a.title.localeCompare(b.title)
	);
}
