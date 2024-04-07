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
