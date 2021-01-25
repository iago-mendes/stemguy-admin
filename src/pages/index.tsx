import Head from 'next/head'
import {GetStaticProps} from 'next'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import useSWR from 'swr'

import Container from '../styles/pages/index'
import api from '../services/api'
import Loading from '../components/Loading'
import Add from '../components/Add'
import Header from '../components/Header'
import Image from 'next/image'

export interface Post
{
	id: string
	url_id: string
	title: string
	description: string
	image:
	{
		url: string
		alt: string
		width: number
		height: number
	},
	flags: Array<{name: string, color: string}>
}

interface PostsProps
{
	posts: Array<Post>
}

const Posts: React.FC<PostsProps> = ({posts: staticPosts}) =>
{
	const Router = useRouter()
	const [search, setSearch] = useState('')
	const {data, error} = useSWR(`/api/search?q=${search}`)
	const [posts, setPosts] = useState<Post[]>(staticPosts)

	useEffect(() =>
	{
		if (data)
			setPosts(data.posts)
		else if (error)
		{
			setPosts(staticPosts)
			console.error(error)
		}
	}, [data, error])

	function truncateText(text: string, length: number)
	{
		let truncated = text

		if (truncated.length > length)
			truncated = truncated.substr(0, length) + '...';

		return truncated;
	}

	if (!posts)
		return <Loading />

	return (
		<Container className='page'>
			<Head>
				<title>STEM Guy</title>
			</Head>

			<Header display='Posts' search={search} setSearch={setSearch} />

			<Add />

			<div className='scroll'>
			{
				!data && search !== ''
				? <Loading  />
				: posts.length === 0
					? (
						<div className='noResults'>
							<h1>No results found!</h1>
						</div>
					)
					: (
							<main>
								{posts.map(post => (
									<div className='post' key={post.id} onClick={() => Router.push(`/${post.url_id}`)}>
										<div className='img'>
											<Image
												src={post.image.url}
												alt={post.image.alt}
												width={post.image.width}
												height={post.image.height}
												layout='responsive'
											/>
										</div>
										<h1>{truncateText(post.title, 45)}</h1>
										<p>{truncateText(post.description, 225)}</p>
										<div className='scroll'>
											<ul>
												{post.flags.map(flag => (
													<li key={flag.name} style={{backgroundColor: flag.color}} >{flag.name}</li>
												))}
											</ul>
										</div>
									</div>
								))}
							</main>
						)
			}
			</div>
		</Container>
	)
}

export const getStaticProps: GetStaticProps = async ctx =>
{
	const {data: posts} = await api.get('posts')

	return {
		props: {posts},
		revalidate: 1
	}
}

export default Posts