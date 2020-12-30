import {GetStaticProps} from 'next'
import Head from 'next/head'
import {useEffect, useState, MouseEvent as ReactMouseEvent} from 'react'
import useSWR from 'swr'
import {useRouter} from 'next/router'
import NextImage from 'next/image'
import {FiCopy} from 'react-icons/fi'

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

	function handleImageClick(e: ReactMouseEvent<HTMLDivElement, MouseEvent>, id: string)
	{
		const copy = ['[object HTMLSpanElement]', '[object SVGSVGElement]']
		if (!copy.includes(String(e.target)))
			Router.push(`/images/${id}`)
	}

	function quotes(text: string)
	{
		if (text.includes("'"))
			return `"${text}"`
		else
			return `'${text}'`
	}

	function handleCopyImg(image: Image)
	{
		const Img =
			`<Img url=${quotes(image.url)} alt=${quotes(image.alt)} credit=${quotes(image.credit)} creditLink=${quotes(image.creditLink)} width=${image.width} height=${image.height} />`

		document.addEventListener('copy', (e: ClipboardEvent) =>
		{
			e.clipboardData?.setData('text/plain', Img)
			e.preventDefault()
		})

		document.execCommand('copy')
		alert('Img component copied!')
		document.removeEventListener('copy', () => {})
	}

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
						onClick={e => handleImageClick(e, image.id)}
					>
						<div
							className="img"
						>
							<NextImage
								src={image.url}
								alt={image.alt}
								width={image.width}
								height={image.width}
								quality={10}
							/>
						</div>
						<h1>{image.alt}</h1>
						<span className="copy" onClick={() => handleCopyImg(image)}>
							<FiCopy size={15} />
						</span>
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