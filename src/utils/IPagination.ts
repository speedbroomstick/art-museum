import { IPaintingsAnswer } from 'utils/IPaintinsAnswer';

export interface IPagination {
	data: IPaintingsAnswer;
	setPage: React.Dispatch<React.SetStateAction<number>>;
}
