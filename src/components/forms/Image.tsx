import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

import api from '../../services/api'
import Container from '../../styles/components/forms/Image'
import Dropzone from '../Dropzone'

export interface Image
{
	id: string
	url: string
	alt: string
	credit: string
	creditLink: string
	width: number
	height: number
	date: string
}

export interface ImageCRUD
{
	id: string
	url: string
	alt: string
	credit: string
	creditLink: string
	date: string
}

interface ImageFormProps
{
	method: string
	image?: ImageCRUD
}

const ImageForm: React.FC<ImageFormProps> = ({method, image}) =>
{
	const Router = useRouter()

	const [imageFile, setImageFile] = useState<File>()
	const [alt, setAlt] = useState('')
	const [credit, setCredit] = useState('')
	const [creditLink, setCreditLink] = useState('')
	const [date, setDate] = useState('')

	useEffect(() =>
	{
		if (image)
		{
			setAlt(image.alt)
			setCredit(image.credit)
			setCreditLink(image.creditLink)
			setDate(image.date)
		}
	}, [image])

	async function handleSubmit()
	{
		const data = new FormData()

		if (imageFile)
			data.append('image', imageFile)
		data.append('alt', alt)
		data.append('credit', credit)
		data.append('creditLink', creditLink)
		data.append('date', date)

		if (method === 'post')
			await api.post('images', data).then(() =>
			{
				alert('Image created successfully!')
				Router.back()
			})
		else if (method === 'put')
			await api.put(`images/${image.id}`, data).then(() =>
			{
				alert('Image edited successfully!')
				Router.back()
			})
	}

	return (
		<Container onSubmit={e => e.preventDefault()} >
			{/* imageFile */}
			<div className='field'>
				<label htmlFor='imageFile'>Image file</label>
				<Dropzone
					name='imageFile'
					id='imageFile'
					onFileUploaded={setImageFile}
					shownFileUrl={image && image.url}
				/>
			</div>
			{/* alt */}
			<div className='field'>
				<label htmlFor='alt'>Alternative text</label>
				<input
					type='text'
					name='alt'
					id='alt'
					value={alt}
					onChange={e => setAlt(e.target.value)}
				/>
			</div>
			{/* credit */}
			<div className='field'>
				<label htmlFor='credit'>Credit text</label>
				<input
					type='text'
					name='credit'
					id='credit'
					value={credit}
					onChange={e => setCredit(e.target.value)}
				/>
			</div>
			{/* creditLink */}
			<div className='field'>
				<label htmlFor='creditLink'>Credit link</label>
				<input
					type='text'
					name='creditLink'
					id='creditLink'
					value={creditLink}
					onChange={e => setCreditLink(e.target.value)}
				/>
			</div>
			{/* date */}
			<div className='field'>
				<label htmlFor='date'>Date</label>
				<input
					type='date'
					name='date'
					id='date'
					value={date}
					onChange={e => setDate(e.target.value)}
				/>
			</div>
			<div className="buttons">
				<button onClick={Router.back} >Cancel</button>
				<button onClick={handleSubmit} >Submit</button>
			</div>
		</Container>
	)
}

export default ImageForm