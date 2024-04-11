export interface IPaginationProps {
	total: number;
	offset: number;
	setOffset: React.Dispatch<React.SetStateAction<number>>;
}
