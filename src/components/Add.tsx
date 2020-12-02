import Container from '../styles/components/Add'
import {FiPlus} from 'react-icons/fi'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

const Add: React.FC = () =>
{
	const Router = useRouter()
	const [page, setPage] = useState('')

	useEffect(() =>
	{
		const path = Router.pathname
		console.log('[path]', path)
		setPage(path)
	}, [Router])

	function handleClick()
	{
		if (page === '/')
			Router.push('/add')
		else
			Router.push(`${page}/add`)
	}

	if (!['/', '/images', '/tags', '/authors'].includes(page))
		return null

	return (
		<Container title='Add' onClick={() => handleClick()} >
			<FiPlus size={30} />
		</Container>
	)
}

export default Add