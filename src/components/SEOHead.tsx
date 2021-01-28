import Head from 'next/head'

const SEOHead: React.FC = () =>
{
	const meta =
	{
		title: 'Admin | STEM Guy',
		description: 'Admin system for the STEM Guy blog.',
		url: 'https://admin.stemguy.club',
		image: 'https://api.stemguy.club/public/logo.png'
	}

	return (
		<Head>
			<title>{meta.title}</title>
			<meta name='title' content={meta.title} />
			<meta name='description' content={meta.description} />

			<meta property='og:type' content='article' />
			<meta property='og:url' content={meta.url} />
			<meta property='og:title' content={meta.title} />
			<meta property='og:description' content={meta.description} />
			<meta property='og:image' content={meta.image} />
			<meta property='og:site_name' content='STEM Guy' />

			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content={meta.url} />
			<meta property='twitter:title' content={meta.title} />
			<meta property='twitter:description' content={meta.description} />
			<meta property='twitter:image' content={meta.image} />
			<meta name='twitter:site' content='@stemguyclub' />
			<meta name='twitter:creator' content='@stemguyclub' />
		</Head>
	)
}

export default SEOHead