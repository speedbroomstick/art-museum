export interface IPaintingsAnswer {
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
	prev_url?: string;
	next_url?: string;
}

export interface IDaum {
	id: number;
	api_model: string;
	api_link: string;
	is_boosted: boolean;
	title: string;
	alt_titles: string[] | null;
	thumbnail: IThumbnail;
	main_reference_number: string;
	has_not_been_viewed_much: boolean;
	boost_rank: number | null;
	date_start: number;
	date_end: number;
	date_display: string;
	date_qualifier_title: string;
	date_qualifier_id: number | null;
	artist_display: string;
	place_of_origin: string;
	description: string;
	short_description: string | null;
	dimensions: string;
	dimensions_detail: IDimensionsDetail[];
	medium_display: string;
	inscriptions: string | null;
	credit_line: string;
	catalogue_display: string | null;
	publication_history: string | null;
	exhibition_history: string | null;
	provenance_text: string | null;
	edition: string | null;
	publishing_verification_level: string;
	internal_department_id: number;
	fiscal_year: number;
	fiscal_year_deaccession: number | null;
	is_public_domain: boolean;
	is_zoomable: boolean;
	max_zoom_window_size: number;
	copyright_notice: string | null;
	has_multimedia_resources: boolean;
	has_educational_resources: boolean;
	has_advanced_imaging: boolean;
	colorfulness: number;
	color: IColor;
	latitude: number | null;
	longitude: number | null;
	latlon: string | null;
	is_on_view: boolean;
	on_loan_display: string | null;
	gallery_title: null;
	gallery_id: number | null;
	nomisma_id: number | null;
	artwork_type_title: string;
	artwork_type_id: number;
	department_title: string;
	department_id: string;
	artist_id: number;
	artist_title: string;
	alt_artist_ids: number[] | null[];
	artist_ids: number[];
	artist_titles: string[];
	category_ids: string[];
	category_titles: string[];
	term_titles: string[];
	style_id: string;
	style_title: string;
	alt_style_ids: string[] | null[];
	style_ids: string[];
	style_titles: string[];
	classification_id: string;
	classification_title: string;
	alt_classification_ids: string[];
	classification_ids: string[];
	classification_titles: string[];
	subject_id: string | null;
	alt_subject_ids: string[] | null[];
	subject_ids: string | null[];
	subject_titles: string | null[];
	material_id: string;
	alt_material_ids: string[];
	material_ids: string[];
	material_titles: string[];
	technique_id: string | null;
	alt_technique_ids: string[] | null[];
	technique_ids: string[] | null[];
	technique_titles: string[] | null[];
	theme_titles: string[] | null[];
	image_id: string;
	alt_image_ids: string[] | null[];
	document_ids: string[] | null[];
	sound_ids: string[] | null[];
	video_ids: string[] | null[];
	text_ids: string[] | null[];
	section_ids: string[] | null[];
	section_titles: string[] | null[];
	site_ids: string[] | null[];
	suggest_autocomplete_all: ISuggestAutocompleteAll[];
	source_updated_at: string;
	updated_at: string;
	timestamp: string;
}

export interface IThumbnail {
	lqip: string;
	width: number;
	height: number;
	alt_text: string;
}

export interface IDimensionsDetail {
	depth?: number;
	width?: number;
	height: number;
	diameter: null;
	clarification: null;
}

export interface IColor {
	h: number;
	l: number;
	s: number;
	percentage: number;
	population: number;
}

export interface ISuggestAutocompleteAll {
	input: string[];
	contexts: IContexts;
	weight?: number;
}

export interface IContexts {
	groupings: string[];
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
