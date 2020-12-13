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

interface ImageFormProps
{
	method: string
	image?: Image
}

const ImageForm: React.FC<ImageFormProps> = ({method, image}) =>
{
	const Router = useRouter()

	const [imageFile, setImageFile] = useState<File>()
	const [alt, setAlt] = useState('')
	const [credit, setCredit] = useState('')
	const [creditLink, setCreditLink] = useState('')

	useEffect(() =>
	{
		if (image)
		{
			setAlt(image.alt)
			setCredit(image.credit)
			setCreditLink(image.creditLink)
		}
	}, [image])

	async function handleSubmit()
	{
		const data = new FormData()

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
			<Dropzone onFileUploaded={setImageFile} />

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

			<div className='field'>
				<label htmlFor='credit'>Credit text</label>
				<input
					type='credit'
					name='credit'
					id='credit'
					value={credit}
					onChange={e => setCredit(e.target.value)}
				/>
			</div>

			<div className='field'>
				<label htmlFor='creditLink'>Credit link</label>
				<input
					type='creditLink'
					name='creditLink'
					id='creditLink'
					value={creditLink}
					onChange={e => setCreditLink(e.target.value)}
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