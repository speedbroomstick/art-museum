import { QueryStatus } from '@reduxjs/toolkit/query';
import { IPaintingByIdAnswer } from 'constants/IPaintingByIdAnswer';

export interface IFrameContainerSection {
	status: QueryStatus;
	paintings: IPaintingByIdAnswer | undefined;
	inset?: boolean;
}
