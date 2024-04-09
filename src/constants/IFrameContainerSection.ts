import { QueryStatus } from '@reduxjs/toolkit/query';
import { IDataForLocalStorage } from 'constants/IDataForLocalStorage';
import { IDaum } from 'constants/IPaintingByIdAnswer';

export interface IFrameContainerSection {
	status: QueryStatus;
	paintings: IDaum[] | IDataForLocalStorage[] | undefined;
	inset?: boolean;
}
