import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

import Container from '../../styles/pages/flags/[flag]'
import FlagForm, {Flag} from '../../components/forms/Flag'
import api from '../../services/api'
import Delete from '../../components/Delete'

const EditFlag: React.FC = () =>
{
	const Router = useRouter()
	const {flag: flagId} = Router.query

	const [flag, setFlag] = useState<Flag>({_id: '', name: '', color: '#000000'})

	useEffect(() =>
	{
		api.get('flags').then(({data}:{data: Flag[]}) =>
		{
			const tmp = data.find(flag => flag._id == flagId)
			if (tmp)
				setFlag(tmp)
		})
	}, [flagId])

	return (
		<Container className='page'>
			<Delete collection='flags' id={flag._id} />
			<main>
				<FlagForm method='put' flag={flag} />
			</main>
		</Container>
	)
}

export default EditFlag