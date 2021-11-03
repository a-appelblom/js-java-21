export interface InfoRow {
	slice_type: string;
	slice_label: string | null;
	items: RowItem[];
}

export interface RowItem {
	row_image: {
		alt: string;
		url: string;
	};
	row_title: [
		{
			type: string;
			text: string;
		}
	];
	row_content: unknown;
	image_position: boolean;
	link: string;
}
