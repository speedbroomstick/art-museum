import arrow from 'assets/arrow.svg';
import { ActiveLink, Link, PaginationDiv } from 'components/Pagination/styled';

export function Pagination() {
	return (
		<PaginationDiv>
			<ActiveLink href="1">1</ActiveLink>
			<Link href="2">2</Link>
			<Link href="3">3</Link>
			<Link href="4">4</Link>
			<Link href='5'><img src={arrow} alt="" /></Link>
		</PaginationDiv>
	);
}
