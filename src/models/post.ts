export interface PostListed
{
	id: string
	url_id: string
	title: string
	description: string
	image:
	{
		url: string
		alt: string
		width: number
		height: number
	},
	flags: Array<{name: string, color: string}>
}