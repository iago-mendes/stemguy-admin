import Head from 'next/head'
import {useSession, signIn, signOut} from 'next-auth/client'
import {GetStaticProps} from 'next'

import Container from '../styles/pages/index'
import Loading from '../components/Loading'
import api from '../services/api'
import { useEffect } from 'react'

interface PostsProps
{
	posts: Array<
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
	}>
}

const Posts: React.FC<PostsProps> = ({posts}) =>
{
	const [session, loading] = useSession()

	useEffect(() =>
	{
		if (posts)
			console.log('[posts]', posts)
	}, [posts])

	if (loading) return <Loading />

	return (
		<Container className='page'>
			<Head>
				<title>STEM Guy</title>
			</Head>

			<h1>Hello, world!</h1>

			{
				session
				? (
					<>
						<h1>You're logged!</h1>
						<button onClick={() => signOut()} >Log out</button>
					</>
				)
				: <button onClick={() => signIn('auth0')} >Login</button>
			}
		</Container>
	)
}

export const getStaticProps: GetStaticProps = async ctx =>
{
	const {data: posts} = await api.get('posts')

	return {
		props: {posts}
	}
}

export default Posts