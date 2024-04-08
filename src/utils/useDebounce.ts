import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useRef, useEffect } from 'react';

type Timer = ReturnType<typeof setTimeout>;

export function useDebounce(
	func: ActionCreatorWithPayload<string, 'search/setValueSearch'>,
	delay = 1000
) {
	const timer = useRef<Timer>();

	useEffect(() => {
		return () => {
			if (!timer.current) return;
			clearTimeout(timer.current);
		};
	}, []);

	const debouncedFunction = ((...args) => {
		const newTimer = setTimeout(() => {
			func(...args);
		}, delay);
		clearTimeout(timer.current);
		timer.current = newTimer;
	}) as ActionCreatorWithPayload<string, 'search/setValueSearch'>;

	return debouncedFunction;
}
