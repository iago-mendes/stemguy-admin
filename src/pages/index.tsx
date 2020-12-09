import Head from 'next/head'
import {GetStaticProps} from 'next'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import useSWR from 'swr'

import {IoNewspaperOutline} from 'react-icons/io5'
import {BiSearch} from 'react-icons/bi'

import Container from '../styles/pages/index'
import api from '../services/api'
import Loading from '../components/Loading'
import Add from '../components/Add'

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

	if (!posts)
		return <Loading />

	return (
		<Container className='page'>
			<Head>
				<title>STEM Guy</title>
			</Head>

			<Add />

			<header>
				<div className="group">
					<IoNewspaperOutline size={50} />
					<h1>Posts</h1>
				</div>
				<div className="inputField">
					<BiSearch size={25} color='rgb(138, 138, 138)' />
					<input type="text" name="search" value={search} onChange={e => setSearch(e.target.value)} />
				</div>
			</header>

			<div className="scroll">
			{
				!data && search !== ''
				? <Loading  />
				: posts.length === 0
					? (
						<div className="noResults">
							<h1>No results found!</h1>
						</div>
					)
					: (
							<main>
								{posts.map(post => (
									<div className="post" key={post.id} onClick={() => Router.push(`/${post.url_id}`)}>
										<div className="imgContainer">
											<img src={post.image.url} alt={post.image.alt} />
										</div>
										<h1>{post.title}</h1>
										<p>{post.description}</p>
										<ul>
											{post.flags.map(flag => (
												<li key={flag.name} style={{backgroundColor: `#${flag.color}`}} >{flag.name}</li>
											))}
										</ul>
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