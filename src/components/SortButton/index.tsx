import sortIcon from 'assets/svg/sortIcon.svg';
import sortBackIcon from 'assets/svg/sortBackIcon.svg';
import { SortIconBox } from './styled';
import { useAppSelector } from 'utils/hooks';
import { useActions } from 'utils/useActions';
import { sortByLetter } from 'utils/sortByLetter';

export function SortButton() {
	const searchValues = useAppSelector((state) => state.searchValue);
	const { setPaintings, setValueSearch } = useActions();
	const paintings = useAppSelector((state) => state.paintings);
	return (
		<SortIconBox
			$isActive={searchValues.sort}
			type="button"
			onClick={() => {
				setValueSearch({ ...searchValues, sort: !searchValues.sort });
				setPaintings(sortByLetter(paintings.paintings, searchValues.sort));
			}}
		>
			<img
				src={searchValues.sort ? sortBackIcon : sortIcon}
				alt=""
				title="By alphabet"
			/>
		</SortIconBox>
	);
}
