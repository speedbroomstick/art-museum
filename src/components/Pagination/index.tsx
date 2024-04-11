import arrow from 'assets/svg/arrow.svg';
import backArrow from 'assets/svg/BackArrow.svg';
import { ActiveLink, Link, PaginationDiv } from 'components/Pagination/styled';
import { IPaginationProps } from 'constants/interfaces/IPagination';
import { useState } from 'react';

export function Pagination({ total, offset, setOffset }: IPaginationProps) {
	const [currentPage, setCurrentPage] = useState(1);
	function handleClick(countOffset: number, countPage: number) {
		setOffset(countOffset);
		setCurrentPage(countPage);
	}
	return (
		<PaginationDiv data-testid="pagDiv">
			{currentPage > 1 ? (
				<>
					<Link onClick={() => handleClick(offset - 3, currentPage - 1)}>
						<img src={backArrow} alt="" />
					</Link>
					{currentPage > 2 ? (
						<Link onClick={() => handleClick(offset - 6, currentPage - 2)}>
							{currentPage - 2}
						</Link>
					) : null}
					<Link onClick={() => handleClick(offset - 3, currentPage - 1)}>
						{currentPage - 1}
					</Link>
				</>
			) : null}
			<ActiveLink onClick={() => handleClick(offset, currentPage)}>
				{currentPage}
			</ActiveLink>
			{currentPage < Math.ceil(total / 3) ? (
				<>
					<Link onClick={() => handleClick(offset + 3, currentPage + 1)}>
						{currentPage + 1}
					</Link>
					{currentPage + 2 <= Math.ceil(total / 3) ? (
						<Link onClick={() => handleClick(offset + 6, currentPage + 2)}>
							{currentPage + 2}
						</Link>
					) : null}
					<Link onClick={() => handleClick(offset + 3, currentPage + 1)}>
						<img src={arrow} alt="" />
					</Link>
				</>
			) : null}
		</PaginationDiv>
	);
}
