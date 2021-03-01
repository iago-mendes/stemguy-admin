import {useEffect, useState} from 'react'

import api from '../../services/api'
import {defaultPaginate, Paginate} from '../../models'
import {PostListed} from '../../models/post'

const usePosts = (search: string) =>
{
	const [posts, setPosts] = useState<PostListed[]>([])
	const [paginate, setPaginate] = useState<Paginate>(defaultPaginate)
	const [loading, setLoading] = useState(true)

	useEffect(() =>
	{
		updatePosts()
	}, [search])

	async function updatePosts()
	{
		setLoading(true)
		
		const {data, headers} = await api.get('posts/all', {params: {search, page: paginate.page}})

		let tmpPosts: PostListed[] = data || []
		const tmpPaginate =
		{
			page: Number(headers.page) || 1,
			total: Number(headers.totalpages) || 1
		}

		setPosts(tmpPosts)
		setPaginate(tmpPaginate)

		setLoading(false)
	}

	async function changePage(page: number)
	{
		let tmpPaginate = paginate
		tmpPaginate.page = page
		setPaginate(tmpPaginate)

		await updatePosts()
	}

	return {posts, loading, paginate, setPaginate}
}

export default usePosts