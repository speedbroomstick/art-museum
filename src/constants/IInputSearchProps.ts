export interface IInputSearchProps {
	name: string;
	placeholder: string;
	handleChange(e: React.ChangeEvent): void;
	submitForm(): Promise<void>;
}
