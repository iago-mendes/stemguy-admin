import {GetStaticProps} from 'next'
import Head from 'next/head'
import {useEffect, useState} from 'react'
import useSWR from 'swr'
import {useRouter} from 'next/router'
import NextImage from 'next/image'

import Header from '../../components/Header'
import api from '../../services/api'
import Container from '../../styles/pages/images/index'
import Add from '../../components/Add'
import {Image} from '../../components/forms/Image'

interface ImagesProps
{
	images: Image[]
}

const Images: React.FC<ImagesProps> = ({images: staticImages}) =>
{
	const Router = useRouter()

	const [search, setSearch] = useState('')
	const {data, error} = useSWR('/api/getImages')
	const [images, setImages] = useState<Image[]>(staticImages)

	useEffect(() =>
	{
		if (data)
			setImages(data)
		else if (error)
		{
			setImages(staticImages)
			console.error(error)
		}
	}, [data, error])

	return (
		<Container className='page'>
			<Head>
				<title>Images | STEM Guy</title>
			</Head>

			<Header display='Images' search={search} setSearch={setSearch} />

			<Add />

			<main>
				{images.map(image => (
					<div
						className='image'
						key={image.id}
						onClick={() => Router.push(`images/${image.id}`)}
					>
						<div
							className="img"
							// style={{width: `calc(${image.width} / ${image.height} * 80%)`}}
						>
							<NextImage
								src={image.url}
								alt={image.alt}
								width={image.width}
								height={image.width}
								// layout='responsive'
								// layout='fill'
								quality={10}
								// styles={{}}
								className='NextImageClass'
							/>
						</div>
						<h1>{image.alt}</h1>
					</div>
				))}
			</main>
		</Container>
	)
}

export const getStaticProps: GetStaticProps = async ctx =>
{
	const {data: images} = await api.get('images')

	return {
		props: {images},
		revalidate: 1
	}
}

export default Images