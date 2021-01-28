import {GetStaticProps} from 'next'
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
import PaginateFooter from '../../components/PaginateFooter'
import Loading from '../../components/Loading'

interface ImagesProps
{
	images: Image[]
}

const Images: React.FC<ImagesProps> = ({images: staticImages}) =>
{
	const Router = useRouter()

	const [search, setSearch] = useState('')
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState(1)

	const {data, error} = useSWR(`/api/getImages?search=${search}&page=${page}`)
	const [images, setImages] = useState<Image[]>(staticImages)

	useEffect(() =>
	{
		if (data)
		{
			setImages(data.images)
			setPage(data.paginate.page)
			setTotalPages(data.paginate.total)
		}
		else if (error)
		{
			setImages(staticImages)
			setPage(1)
			setTotalPages(1)

			console.error(error)
		}
	}, [data, error])

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
			<Header display='Images' search={search} setSearch={setSearch} />

			<Add />

			<main>
				{
					!data && search !== ''
					? <Loading />
					: images.length === 0 && search !== ''
						? (
							<div className='noResults'>
								<h1>No results found!</h1>
							</div>
						)
						: images.map(image => (
							<div
								className='image'
								key={image.id}
							>
								<div
									className='img'
									title='Edit image'
									onClick={() => Router.push(`/images/${image.id}`)}
								>
									<NextImage
										src={image.url}
										alt={image.alt}
										width={image.width}
										height={image.height}
										layout='responsive'
										quality={10}
									/>
								</div>
								<div className='group'>
									<h1>{image.alt}</h1>
									<button
										className='copy'
										onClick={() => handleCopyImg(image)}
										title='Copy Img component'
									>
										<FiCopy size={15} />
									</button>
								</div>
							</div>
				))}
			</main>

			<PaginateFooter page={page} setPage={setPage} totalPages={totalPages} />
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