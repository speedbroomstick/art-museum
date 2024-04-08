import { useMemo } from 'react';
import { actions } from 'store/slices/valueSearchSlice';
import { useAppDispatch } from './hooks';
import { bindActionCreators } from '@reduxjs/toolkit';

const RootActions = {
	...actions,
};

export const useActions = () => {
	const despatch = useAppDispatch();

	return useMemo(() => bindActionCreators(RootActions, despatch), [despatch]);
};
