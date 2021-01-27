import {NextApiHandler} from 'next'

import api from '../../services/api'

const getMembers: NextApiHandler = async (req, res) =>
{
	const {data} = await api.get('members')

	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify(data))
}

export default getMembers