import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

import api from '../../services/api'
import Container from '../../styles/components/forms/Member'
import Dropzone from '../Dropzone'
import Member from '../../models/member'

interface MemberFormProps
{
	method: string
	member?: Member
}

const MemberForm: React.FC<MemberFormProps> = ({method, member}) =>
{
	const Router = useRouter()

	const [imageFile, setImageFile] = useState<File>()

	useEffect(() =>
	{
		if (member)
		{
			
		}
	}, [member])

	async function handleSubmit()
	{
		const data = new FormData()

		if (imageFile)
			data.append('member', imageFile)

		// if (method === 'post')
		// 	await api.post('images', data).then(() =>
		// 	{
		// 		alert('Image created successfully!')
		// 		Router.back()
		// 	})
		// else if (method === 'put')
		// 	await api.put(`images/${member.id}`, data).then(() =>
		// 	{
		// 		alert('Image edited successfully!')
		// 		Router.back()
		// 	})
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
					shownFileUrl={member && member.image}
				/>
			</div>

			<div className='buttons'>
				<button type='button' onClick={Router.back} >Cancel</button>
				<button type='submit' >Submit</button>
			</div>
		</Container>
	)
}

export default MemberForm