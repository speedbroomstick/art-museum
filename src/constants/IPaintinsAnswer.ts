export interface IPaintingsAnswer {
	preference: string | null;
	pagination: IPagination;
	data: IDaum[];
	info: IInfo;
	config: IConfig;
}

export interface IPagination {
	total: number;
	limit: number;
	offset: number;
	total_pages: number;
	current_page: number;
}

export interface IDaum {
	_score: number;
	id: number;
}

export interface IInfo {
	license_text: string;
	license_links: string[];
	version: string;
}

export interface IConfig {
	iiif_url: string;
	website_url: string;
}
