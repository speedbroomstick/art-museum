import { useMemo } from 'react';
import { actions as valueSearchActions } from 'store/slices/valueSearchSlice';
import { actions as paintingsActions } from 'store/slices/paintingStorageSlice';
import { useAppDispatch } from './hooks';
import { bindActionCreators } from '@reduxjs/toolkit';

const RootActions = {
	...valueSearchActions,
	...paintingsActions,
};

export const useActions = () => {
	const despatch = useAppDispatch();

	return useMemo(() => bindActionCreators(RootActions, despatch), [despatch]);
};
