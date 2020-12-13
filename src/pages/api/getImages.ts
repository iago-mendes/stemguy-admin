import {NextApiHandler} from "next"

import api from "../../services/api"

const search: NextApiHandler = async (req, res) =>
{
	let images = []
	await api.get('images').then(res => images = res.data)

	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify(images))
}

export default search