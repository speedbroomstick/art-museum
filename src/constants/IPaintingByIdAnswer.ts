export interface IPaintingByIdAnswer {
	data: IDaum[];
	info: IInfo;
	config: IConfig;
}

interface IDaum {
	id: number;
	title: string;
	artist_title: string;
	image_id: string;
	date_display: string;
	place_of_origin: string;
	dimensions: string;
	credit_line: string;
	is_public_domain: boolean;
	artist_display: string;
}

interface IInfo {
	license_text: string;
	license_links: string[];
	version: string;
}

interface IConfig {
	iiif_url: string;
	website_url: string;
}
