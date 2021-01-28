import {useRouter} from 'next/router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Container from '../styles/components/Delete'
import {FiTrash} from 'react-icons/fi'
import api from '../services/api'
import successAlert from '../utils/alerts/success'
import errorAlert from '../utils/alerts/error'

const MySwal = withReactContent(Swal)

interface DeleteProps
{
	collection: string
	id: string
}

const Delete: React.FC<DeleteProps> = ({collection, id}) =>
{
	const {back} = useRouter()

	function handleClick()
	{
		MySwal.fire(
			{
				icon: 'question',
				title: 'Are you sure?',
				text: `If you continue, this item will be deleted!`,
				showCancelButton: true,
				confirmButtonText: 'Continue'
			})
			.then(res =>
			{
				if (res.isConfirmed)
					handleRemove()
			})
	}

	function handleRemove()
	{
		api.delete(`${collection}/${id}`)
			.then(() =>
			{
				successAlert('Item successfully deleted!')
				back()
			})
			.catch(err =>
			{
				errorAlert(err.response.data.message)
			})
	}

	return (
		<Container title='Delete' onClick={() => handleClick()} >
			<FiTrash size={30} />
		</Container>
	)
}

export default Delete