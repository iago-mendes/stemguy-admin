import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

import Container from '../styles/pages/[post]'
import PostForm from '../components/forms/Post'
import {Post} from '../components/forms/Post'
import api from '../services/api'
import Delete from '../components/Delete'

const EditPost: React.FC = () =>
{
	const Router = useRouter()
	const {post: urlId} = Router.query

	const [id, setId] = useState('')
	const [post, setPost] = useState<Post>(
	{
		title: '',
		url_id: '',
		time: 0,
		image: '',
		author: '',
		flags: [],
		description: '',
		markdown: ''
	})

	useEffect(() =>
	{
		api.get(`posts-raw/${urlId}`).then(({data}) =>
		{
			setId(data._id)
			setPost(
			{
				title: data.title,
				url_id: data.url_id,
				time: data.time,
				image: data.image,
				author: data.author,
				flags: data.flags,
				description: data.description,
				markdown: data.markdown,
			})
		})
	}, [urlId])

	return (
		<Container className='page'>
			<Delete collection='posts' id={id} />
			<div className="scrollableContent">
				<PostForm method='put' id={id} post={post} />
			</div>
		</Container>
	)
}

export default EditPost