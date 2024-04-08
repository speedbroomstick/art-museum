import {
	HeaderText,
	InputSearch,
	Magnifier,
	OrangeSpan,
	VerticalContainer,
	InputContainer,
} from 'components/SearchSection/styled';
import magnifier from 'assets/svg/magnifier.svg';
import { useActions } from 'utils/useActions';
import { useDebounce } from 'utils/useDebounce';

export function SearchSection() {
	const { setValueSearch } = useActions();
	const debouncedValue = useDebounce(setValueSearch, 2000);

	return (
		<VerticalContainer theme={{ marginTop: '5rem' }}>
			<HeaderText>
				Let's Find Some <OrangeSpan>Art</OrangeSpan> Here!
			</HeaderText>
			<InputContainer>
				<InputSearch
					type="text"
					name="search"
					placeholder="Search Art, Artist, Work..."
					onChange={(e) => debouncedValue(e.target.value)}
				/>
				<Magnifier src={magnifier} alt="" />
			</InputContainer>
		</VerticalContainer>
	);
}
