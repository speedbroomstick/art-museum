import sortIcon from 'assets/svg/sortIcon.svg';
import { SortIconBox } from './styled';
import { useActions } from 'utils/useActions';
import { useAppSelector } from 'utils/hooks';

export function SortButton() {
	const { setValueSearch } = useActions();
	const searchValue = useAppSelector((state) => state.searchValue);
	return (
		<SortIconBox
			type="button"
			onClick={() =>
				setValueSearch({ ...searchValue, sort: !searchValue.sort })
			}
		>
			<img src={sortIcon} alt="" />
		</SortIconBox>
	);
}
