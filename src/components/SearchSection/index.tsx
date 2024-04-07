import {
	HeaderText,
	InputSearch,
	Magnifier,
	OrangeSpan,
	VerticalContainer,
	InputContainer,
} from 'components/SearchSection/styled';
import magnifier from 'assets/svg/magnifier.svg';

export function SearchSection() {
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
				/>
				<Magnifier src={magnifier} alt="" />
			</InputContainer>
		</VerticalContainer>
	);
}
