import {useRouter} from 'next/router'

import Container from '../styles/components/Delete'
import {FiTrash} from 'react-icons/fi'
import api from '../services/api'

interface DeleteProps
{
	collection: string
	id: string
}

const Delete: React.FC<DeleteProps> = ({collection, id}) =>
{
	const Router = useRouter()

	async function handleClick()
	{
		const yes = confirm('Are you sure you want to delete this item?')
		if (yes)
			await api.delete(`${collection}/${id}`)
				.then(() =>
				{
					alert('Item deleted successfully!')
					Router.back()
				})
				.catch(err =>
				{
					alert('Some error occurred!')
					console.error(err)
				})
	}

	return (
		<Container title='Delete' onClick={() => handleClick()} >
			<FiTrash size={30} />
		</Container>
	)
}

export default Delete