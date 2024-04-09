import { useRef, useEffect } from 'react';

type Timer = ReturnType<typeof setTimeout>;

export function useDebounce<T extends (...args: unknown[]) => unknown>(
	func: T,
	delay = 1000
): T {
	const timer = useRef<Timer>();

	useEffect(() => {
		return () => {
			if (!timer.current) return;
			clearTimeout(timer.current);
		};
	}, []);

	const debouncedFunction = ((...args: Parameters<T>) => {
		const newTimer = setTimeout(() => {
			func(...args);
		}, delay);
		clearTimeout(timer.current);
		timer.current = newTimer;
	}) as T;

	return debouncedFunction;
}
