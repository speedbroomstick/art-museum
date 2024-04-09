import { QueryStatus } from '@reduxjs/toolkit/query';
import { IDataForLocalStorage } from './IDataForLocalStorage';
import { IDaum } from './IPaintingByIdAnswer';

export interface IFrameContainerSectionProps {
	status: QueryStatus;
	paintings: IDaum[] | IDataForLocalStorage[] | undefined;
	inset?: boolean;
}
