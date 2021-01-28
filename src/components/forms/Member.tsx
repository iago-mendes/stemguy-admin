import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Switch from 'react-switch'
import {FiMinus, FiPlus} from 'react-icons/fi'

import api from '../../services/api'
import Container from '../../styles/components/forms/global'
import Dropzone from '../Dropzone'
import Member from '../../models/member'
import successAlert from '../../utils/alerts/success'
import errorAlert from '../../utils/alerts/error'

interface MemberFormProps
{
	method: string
	member?: Member
}

const MemberForm: React.FC<MemberFormProps> = ({method, member}) =>
{
	const router = useRouter()

	const [imageFile, setImageFile] = useState<File>()
	const [name, setName] = useState('')
	const [role, setRole] = useState('')
	const [admin, setAdmin] = useState(false)
	const [bio, setBio] = useState('')
	const [favTopics, setFavTopics] = useState<string[]>([])

	useEffect(() =>
	{
		if (member)
		{
			
		}
	}, [member])

	function handleAddTopic()
	{
		let tmpFavTopics = [...favTopics]
		tmpFavTopics.push('')
		setFavTopics(tmpFavTopics)
	}

	function handleRemoveTopic(index: number)
	{
		let tmpFavTopics = [...favTopics]
		tmpFavTopics.splice(index, 1)
		setFavTopics(tmpFavTopics)
	}

	function handleChangeTopic(topic: string, index: number)
	{
		let tmpFavTopics = [...favTopics]
		tmpFavTopics[index] = topic
		setFavTopics(tmpFavTopics)
	}

	async function handleSubmit()
	{
		const data = new FormData()

		if (imageFile)
			data.append('image', imageFile)
		data.append('name', name)
		data.append('role', role)
		data.append('admin', JSON.stringify(admin))
		data.append('bio', bio)
		data.append('favTopics', JSON.stringify(favTopics))

		if (method === 'post')
			await api.post('members', data)
				.then(() =>
				{
					successAlert('Member successfully created!')
					router.back()
				})
				.catch(err =>
				{
					errorAlert(err.response.data.message)
				})
		else if (method === 'put')
			await api.put(`members/${member.id}`, data).then(() =>
			{
				alert('Member successfully edited!')
				router.back()
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
					shownFileUrl={member && member.image}
					className='dropzone'
				/>
			</div>
			{/* name */}
			<div className='field'>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					id='name'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</div>
			{/* role */}
			<div className='field'>
				<label htmlFor='role'>Jot title</label>
				<input
					type='text'
					name='role'
					id='role'
					value={role}
					onChange={e => setRole(e.target.value)}
				/>
			</div>
			{/* admin */}
			<div className='field'>
				<label htmlFor='admin'>Administrator</label>
				<Switch
					type='text'
					name='admin'
					id='admin'
					checked={admin}
					onChange={setAdmin}
					className='switch'
				/>
			</div>
			{/* bio */}
			<div className='field textarea'>
				<label htmlFor='bio'>Biography</label>
				<textarea
					name='bio'
					id='bio'
					value={bio}
					onChange={e => setBio(e.target.value)}
					rows={10}
				/>
			</div>
			{/* favTopics */}
			<div className='field'>
				<label htmlFor='topic'>Favorite topics</label>
				<ul className='list' >
					{favTopics.map((topic, index) => (
						<li key={index} >
							<input
								type='text'
								name='topic'
								id={`topic-${index}`}
								value={topic}
								onChange={e => handleChangeTopic(e.target.value, index)}
							/>
							<button className='remove' onClick={() => handleRemoveTopic(index)} >
								<FiMinus size={20} />
							</button>
						</li>
					))}
					<button className='add' onClick={handleAddTopic} >
						<FiPlus size={25} />
					</button>
				</ul>
			</div>

			<div className='buttons'>
				<button type='button' onClick={router.back} className='cancel' >Cancel</button>
				<button type='submit' className='submit' onClick={handleSubmit} >Submit</button>
			</div>
		</Container>
	)
}

export default MemberForm