import {FormEvent, useEffect, useState} from 'react'
import Select, {OptionsType} from 'react-select'
import {useRouter} from 'next/router'

import api from '../../services/api'
import Container, {selectStyles} from '../../styles/components/forms/Post'

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

interface ImageOption
{
	value: string
	label: string
	url: string
}

interface AuthorOption
{
	value: string
	label: string
	image: string
}

interface FlagOption
{
	value: string
	label: string
	color: string
}

interface PostFormProps
{
	method: string
	
	id?: string
	post?: Post
}

const PostForm: React.FC<PostFormProps> = ({method, id}) =>
{
	const Router = useRouter()

	const [title, setTitle] = useState('')
	const [urlId, setUrlId] = useState('')
	const [time, setTime] = useState(0)
	const [image, setImage] = useState('')
	const [author, setAuthor] = useState('')
	const [flags, setFlags] = useState<string[]>([])
	const [description, setDescription] = useState('')
	const [markdown, setMarkdown] = useState('')

	const [imageOptions, setImageOptions] = useState<ImageOption[]>([])
	const [authorOptions, setAuthorOptions] = useState<AuthorOption[]>([])
	const [flagOptions, setFlagOptions] = useState<FlagOption[]>([])

	useEffect(() =>
	{
		api.get('images').then(({data}) =>
		{
			const tmp: ImageOption[] = data.map(image => (
			{
				value: image.id,
				label: image.alt,
				url: image.url
			}))
			setImageOptions(tmp)
		})

		api.get('authors').then(({data}) =>
		{
			const tmp: AuthorOption[] = data.map(author => (
			{
				value: author.id,
				label: author.name,
				image: author.image
			}))
			setAuthorOptions(tmp)
		})

		api.get('flags').then(({data}) =>
		{
			const tmp: FlagOption[] = data.map(flag => (
			{
				value: flag._id,
				label: flag.name,
				color: flag.color
			}))
			setFlagOptions(tmp)
		})
	}, [])

	function handleImageChange(e: ImageOption)
	{
		if (!e)
			setImage('')
		else
		{
			const tmp = e.value
			setImage(tmp)
		}
	}

	function handleAuthorChange(e: AuthorOption)
	{
		if (!e)
			setAuthor('')
		else
		{
			const tmp = e.value
			setAuthor(tmp)
		}
	}

	function handleFlagsChange(e: OptionsType<FlagOption>)
	{
		if (!e)
			setFlags([])
		else
		{
			const tmp: string[] = e.map(flag => flag.value)
			setFlags(tmp)
		}
	}

	async function handleSubmit()
	{
		const data =
		{
			title,
			url_id: urlId,
			time,
			image,
			author,
			flags,
			description,
			markdown
		}

		if (method === 'post')
			await api.post('posts', data).then(() =>
			{
				alert('Post created successfully!')
				Router.back()
			})
		else if (method === 'put')
			await api.put(`posts/${id}`, data).then(() =>
			{
				alert('Post edited successfully!')
				Router.back()
			})
	}

	return (
		<Container onSubmit={e => e.preventDefault()} >
			<div className='field'>
				<label htmlFor='title'>Title</label>
				<input
					type='text'
					name='title'
					id='title'
					value={title}
					onChange={e => setTitle(e.target.value)}
					placeholder='E.g.: Title of the post'
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
					placeholder='E.g.: this-is-the-id-that-appears-in-the-url'
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
				<Select
					name='image'
					id='image'
					onChange={handleImageChange}
					options={imageOptions}
					styles={selectStyles}
					placeholder='Select the image of the post'
				/>
			</div>
			<div className='field'>
				<label htmlFor='author'>Author</label>
				<Select
					name='author'
					id='author'
					onChange={handleAuthorChange}
					options={authorOptions}
					styles={selectStyles}
					placeholder='Select the author of the post'
				/>
			</div>
			<div className='field'>
				<label htmlFor='flags'>Flags</label>
				<Select
					name='flags'
					id='flags'
					onChange={handleFlagsChange}
					options={flagOptions}
					hideSelectedOptions
					isMulti
					styles={selectStyles}
					placeholder='Selected the flags of the post'
				/>
			</div>
			<div className='field textareaField'>
				<label htmlFor='description'>Description</label>
				<textarea
					name='description'
					id='description'
					value={description}
					onChange={e => setDescription(e.target.value)}
					rows={5}
					placeholder='Type your description here'
				/>
			</div>
			<div className='field textareaField'>
				<label htmlFor='markdown'>Markdown</label>
				<textarea
					name='markdown'
					id='markdown'
					value={markdown}
					onChange={e => setMarkdown(e.target.value)}
					rows={20}
					placeholder='Type your markdown here'
				/>
			</div>
			<div className="buttons">
				<button onClick={Router.back} >Cancel</button>
				<button onClick={handleSubmit} >Submit</button>
			</div>
		</Container>
	)
}

export default PostForm