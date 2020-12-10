import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

import api from '../../services/api'
import Container from '../../styles/components/forms/Flag'

export interface Flag
{
	_id: string
	name: string
	color: string
}

interface FlagFormProps
{
	method: string
	flag?: Flag
}

const FlagForm: React.FC<FlagFormProps> = ({method, flag}) =>
{
	const Router = useRouter()

	const [name, setName] = useState('')
	const [color, setColor] = useState('')

	useEffect(() =>
	{
		if (flag)
		{
			setName(flag.name)
			setColor(flag.color)
		}
	}, [flag])

	async function handleSubmit()
	{
		const data = {name, color}

		if (method === 'post')
			await api.post('flags', data).then(() =>
			{
				alert('Flag created successfully!')
				Router.back()
			})
		else if (method === 'put')
			await api.put(`flags/${flag._id}`, data).then(() =>
			{
				alert('Flag edited successfully!')
				Router.back()
			})
	}

	return (
		<Container onSubmit={e => e.preventDefault()} >
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
			<div className='field'>
				<label htmlFor='color'>Color</label>
				<input
					type='color'
					name='color'
					id='color'
					value={color}
					onChange={e => setColor(e.target.value)}
				/>
			</div>
			<div className="buttons">
				<button onClick={Router.back} >Cancel</button>
				<button onClick={handleSubmit} >Submit</button>
			</div>
		</Container>
	)
}

export default FlagForm