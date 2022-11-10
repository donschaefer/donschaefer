import { MediaType } from "./MediaType";

export interface Media {
	agency?: string;
	agencyUrl?: string;	
	date?: Date;
	location?: string;
	medium?: string;
	thumbnail?: string;
	title: string;
	type: MediaType;
	url: string;
	urlAlternatives?: string[];
}