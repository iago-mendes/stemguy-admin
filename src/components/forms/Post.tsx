import { FormEvent, useState } from 'react'
import Container from '../../styles/components/forms/Post'

export interface Post
{
	title: string
	url_id: string
	time: number
	
	image: string
	author: string
	flags: Array<string>
	
	description: string
	markdown: string
}

interface PostFormProps
{
	method: string
	
	id?: string
	post?: Post
}

const PostForm: React.FC<PostFormProps> = () =>
{
	const [title, setTitle] = useState('')
	const [urlId, setUrlId] = useState('')
	const [time, setTime] = useState(0)
	const [image, setImage] = useState('')
	const [author, setAuthor] = useState('')
	const [flags, setFlags] = useState<string[]>([])
	const [description, setDescription] = useState('')
	const [markdown, setMarkdown] = useState('')

	async function handleSubmit(e: FormEvent)
	{
		e.preventDefault()
	}

	return (
		<Container onSubmit={handleSubmit} >
			<div className='field'>
				<label htmlFor='title'>Title</label>
				<input
					type='text'
					name='title'
					id='title'
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			</div>
			<div className='field'>
				<label htmlFor='urlId'>Url identifier</label>
				<input
					type='text'
					name='urlId'
					id='urlId'
					value={urlId}
					onChange={e => setUrlId(e.target.value)}
				/>
			</div>
			<div className='field'>
				<label htmlFor='time'>Time (minutes)</label>
				<input
					type='number'
					name='time'
					id='time'
					value={time}
					onChange={e => setTime(Number(e.target.value))}
				/>
			</div>
			<div className='field'>
				<label htmlFor='image'>Image</label>
				<select
					name='image'
					id='image'
					value={image}
					onChange={e => setImage(e.target.value)}
				/>
			</div>
			<div className='field'>
				<label htmlFor='author'>Author</label>
				<select
					name='author'
					id='author'
					value={author}
					onChange={e => setAuthor(e.target.value)}
				/>
			</div>
			<div className='field'>
				<label htmlFor='flags'>Flags</label>
				<select
					name='flags'
					id='flags'
					value={flags}
					onChange={e => setFlags([e.target.value])}
				/>
			</div>
			<div className='field'>
				<label htmlFor='description'>Description</label>
				<textarea
					name='description'
					id='description'
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
			</div>
			<div className='field'>
				<label htmlFor='markdown'>Markdown</label>
				<textarea
					name='markdown'
					id='markdown'
					value={markdown}
					onChange={e => setMarkdown(e.target.value)}
				/>
			</div>
		</Container>
	)
}

export default PostForm