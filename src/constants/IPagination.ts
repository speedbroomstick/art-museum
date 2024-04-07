import { IPagination as IPaginationType } from 'constants/IPaintinsAnswer';

export interface IPagination {
	paginationData: IPaginationType;
	setPage: React.Dispatch<React.SetStateAction<number>>;
}
