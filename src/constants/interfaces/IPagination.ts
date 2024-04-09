import { IPagination as IPaginationType } from './IPaintinsAnswer';

export interface IPaginationProps {
	paginationData: IPaginationType;
	setPage: React.Dispatch<React.SetStateAction<number>>;
}
