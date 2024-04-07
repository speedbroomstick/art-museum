import arrow from 'assets/svg/arrow.svg';
import backArrow from 'assets/svg/BackArrow.svg';
import { ActiveLink, Link, PaginationDiv } from 'components/Pagination/styled';
import { IPagination } from 'constants/IPagination';

export function Pagination({ paginationData, setPage }: IPagination) {
	const currentPage = paginationData.current_page;
	return (
		<PaginationDiv>
			{currentPage>1 ? (
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
			{currentPage<paginationData.total_pages ? (
				<>
					<Link onClick={() => setPage(currentPage + 1)}>
						{currentPage + 1}
					</Link>
					{currentPage + 2 <= paginationData.total_pages ? (
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
