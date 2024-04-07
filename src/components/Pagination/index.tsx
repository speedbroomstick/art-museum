import arrow from 'assets/svg/arrow.svg';
import backArrow from 'assets/svg/BackArrow.svg';
import { ActiveLink, Link, PaginationDiv } from 'components/Pagination/styled';
import { IPagination } from 'utils/IPagination';

export function Pagination({ data, setPage }: IPagination) {
	const currentPage = data.pagination.current_page;
	return (
		<PaginationDiv>
			{data.pagination.prev_url ? (
				<>
					<Link onClick={() => setPage(currentPage - 1)}>
						<img src={backArrow} alt="" />
					</Link>
					{currentPage - 2 > 0 ? (
						<Link onClick={() => setPage(currentPage - 2)}>
							{currentPage - 2}
						</Link>
					) : null}
					<Link onClick={() => setPage(currentPage - 1)}>
						{currentPage - 1}
					</Link>
				</>
			) : null}
			<ActiveLink onClick={() => setPage(currentPage)}>
				{currentPage}
			</ActiveLink>
			{data.pagination.next_url ? (
				<>
					<Link onClick={() => setPage(currentPage + 1)}>
						{currentPage + 1}
					</Link>
					{currentPage + 2 <= data.pagination.total_pages ? (
						<Link onClick={() => setPage(currentPage + 2)}>
							{currentPage + 2}
						</Link>
					) : null}
					<Link onClick={() => setPage(currentPage + 1)}>
						<img src={arrow} alt="" />
					</Link>
				</>
			) : null}
		</PaginationDiv>
	);
}
