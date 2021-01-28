import {useEffect, useState} from 'react'
import Select, {OptionsType} from 'react-select'
import {useRouter} from 'next/router'

import api from '../../services/api'
import Container from '../../styles/components/forms/global'
import {selectStyles} from '../../styles/global'
import successAlert from '../../utils/alerts/success'
import errorAlert from '../../utils/alerts/error'
import getDate from '../../utils/getDate'

export interface Post
{
	title: string
	url_id: string
	date: string
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

const PostForm: React.FC<PostFormProps> = ({method, id, post}) =>
{
	const Router = useRouter()

	const [title, setTitle] = useState('')
	const [urlId, setUrlId] = useState('')
	const [date, setDate] = useState(getDate())
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
		api.get('images-raw').then(({data}) =>
		{
			const tmp: ImageOption[] = data.map(image => (
			{
				value: image.id,
				label: image.alt,
				url: image.url
			}))
			setImageOptions(tmp)
		})

		api.get('members').then(({data}) =>
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

	useEffect(() =>
	{
		if (post)
		{
			setTitle(post.title)
			setUrlId(post.url_id)
			setDate(post.date)
			setTime(post.time)
			setImage(post.image)
			setAuthor(post.author)
			setFlags(post.flags)
			setDescription(post.description)
			setMarkdown(post.markdown)
		}
	}, [post])

	useEffect(() =>
	{
		const tmpUrlId = slugify(title)
		setUrlId(tmpUrlId)
	}, [title])

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

	function slugify(text: string)
	{
		const slug = text.toString().toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^\w\-]+/g, '')
			.replace(/\-\-+/g, '-')
			.replace(/^-+/, '')
			.replace(/-+$/, '')

		return slug
	}

	async function handleSubmit()
	{
		const data =
		{
			title,
			url_id: urlId,
			date,
			time,
			image,
			author,
			flags,
			description,
			markdown
		}

		if (method === 'post')
			await api.post('posts', data)
			.then(() =>
			{
				successAlert('Post successfully created!')
				Router.back()
			})
			.catch(err =>
			{
				errorAlert(err.response.data.message)
			})
		else if (method === 'put')
			await api.put(`posts/${id}`, data)
			.then(() =>
			{
				successAlert('Post successfully edited!')
				Router.back()
			})
			.catch(err =>
			{
				errorAlert(err.response.data.message)
			})
	}

	return (
		<Container onSubmit={e => e.preventDefault()} >
			{/* title */}
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
			{/* urlId */}
			<div className='field'>
				<label htmlFor='urlId'>Url identifier</label>
				<input
					type='text'
					name='urlId'
					id='urlId'
					value={urlId}
					onChange={e => setUrlId(e.target.value)}
					placeholder='E.g.: title-of-the-post'
				/>
			</div>
			{/* date */}
			<div className='field'>
				<label htmlFor='date'>Date</label>
				<input
					type='date'
					name='date'
					id='date'
					value={date}
					onChange={e => setDate(e.target.value)}
				/>
			</div>
			{/* time */}
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
			{/* image */}
			<div className='field'>
				<label htmlFor='image'>Image</label>
				<Select
					name='image'
					id='image'
					value={imageOptions.find(img => img.value === image)}
					onChange={handleImageChange}
					options={imageOptions}
					styles={selectStyles}
					placeholder='Select the image of the post'
					className='select'
				/>
			</div>
			{/* author */}
			<div className='field'>
				<label htmlFor='author'>Author</label>
				<Select
					name='author'
					id='author'
					value={authorOptions.find(atr => atr.value === author)}
					onChange={handleAuthorChange}
					options={authorOptions}
					styles={selectStyles}
					placeholder='Select the author of the post'
					className='select'
				/>
			</div>
			{/* flags */}
			<div className='field'>
				<label htmlFor='flags'>Flags</label>
				<Select
					name='flags'
					id='flags'
					value={flagOptions.filter(flg => flags.includes(flg.value))}
					onChange={handleFlagsChange}
					options={flagOptions}
					hideSelectedOptions
					isMulti
					styles={selectStyles}
					placeholder='Selected the flags of the post'
					className='select'
				/>
			</div>
			{/* description */}
			<div className='field textarea'>
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
			{/* textarea */}
			<div className='field textarea'>
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

			<div className='buttons'>
				<button onClick={Router.back} className='cancel' >Cancel</button>
				<button onClick={handleSubmit} className='submit' >Submit</button>
			</div>
		</Container>
	)
}

export default PostForm