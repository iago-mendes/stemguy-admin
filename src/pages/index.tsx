import {useRouter} from 'next/router'
import {useState} from 'react'

import Container from '../styles/pages/index'
import Loading from '../components/Loading'
import Add from '../components/Add'
import Header from '../components/Header'
import Image from 'next/image'
import usePosts from '../hooks/api/usePosts'
import GridPaginate from '../components/GridPaginate'

const Posts: React.FC = () =>
{
	const Router = useRouter()

	const [search, setSearch] = useState('')
	const {posts, loading, paginate, setPaginate} = usePosts(search)

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
			<Header display='Posts' search={search} setSearch={setSearch} />

			<Add />

			<GridPaginate
				cardWidth={300}
				cardHeight={300}

				paginate={paginate}
				setPaginate={setPaginate}

				loading={loading}
				noResults={posts.length === 0 && search !== ''}
			>
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
			</GridPaginate>
		</Container>
	)
}

export default Posts