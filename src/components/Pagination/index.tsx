import arrow from 'assets/svg/arrow.svg';
import backArrow from 'assets/svg/BackArrow.svg';
import { ActiveLink, Link, PaginationDiv } from 'components/Pagination/styled';
import { IPagination } from 'utils/IPagination';

export function Pagination({ data, setPage }: IPagination) {
	return (
		<PaginationDiv>
			{data.pagination.prev_url ? (
				<>
					<Link onClick={() => setPage(data.pagination.current_page - 1)}>
						<img src={backArrow} alt="" />
					</Link>
					{data.pagination.current_page - 2 > 0 ? (
						<Link onClick={() => setPage(data.pagination.current_page - 2)}>
							{data.pagination.current_page - 2}
						</Link>
					) : null}
					<Link onClick={() => setPage(data.pagination.current_page - 1)}>
						{data.pagination.current_page - 1}
					</Link>
				</>
			) : null}
			<ActiveLink onClick={() => setPage(data.pagination.current_page)}>
				{data.pagination.current_page}
			</ActiveLink>
			{data.pagination.next_url ? (
				<>
					<Link onClick={() => setPage(data.pagination.current_page + 1)}>
						{data.pagination.current_page + 1}
					</Link>
					{data.pagination.current_page + 2 <= data.pagination.total_pages ? (
						<Link onClick={() => setPage(data.pagination.current_page + 2)}>
							{data.pagination.current_page + 2}
						</Link>
					) : null}
					<Link onClick={() => setPage(data.pagination.current_page + 1)}>
						<img src={arrow} alt="" />
					</Link>
				</>
			) : null}
		</PaginationDiv>
	);
}
