import {useState} from 'react'
import {useRouter} from 'next/router'
import NextImage from 'next/image'
import {FiCopy} from 'react-icons/fi'

import Header from '../../components/Header'
import Container from '../../styles/pages/images/index'
import Add from '../../components/Add'
import {Image} from '../../components/forms/Image'
import useImages from '../../hooks/api/useImages'
import GridPaginate from '../../components/GridPaginate'

const Images: React.FC = () =>
{
	const Router = useRouter()

	const [search, setSearch] = useState('')
	const {images, loading, paginate, setPaginate} = useImages(search)

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

			<GridPaginate
				cardWidth={250}
				cardHeight={200}

				paginate={paginate}
				setPaginate={setPaginate}

				loading={loading}
				noResults={images.length === 0 && search !== ''}
			>
				{images.map(image => (
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
			</GridPaginate>
		</Container>
	)
}

export default Images