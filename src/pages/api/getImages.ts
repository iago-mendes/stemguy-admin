import {NextApiHandler} from "next"

import api from "../../services/api"

const search: NextApiHandler = async (req, res) =>
{
	const {search, page} = req.query

	const {data: images, headers} = await api.get('images', {params: {search, page}})

	const paginate =
	{
		page: Number(headers.page),
		total: Number(headers.totalpages)
	}

	console.log('[paginate]', paginate)
	console.log('[headers]', headers)

	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify({images, paginate}))
}

export default search