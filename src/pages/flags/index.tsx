import { GetStaticProps } from 'next'
import Head from 'next/head'
import {useEffect, useState} from 'react'
import useSWR from 'swr'

import Header from '../../components/Header'
import api from '../../services/api'
import Container from '../../styles/pages/flags/index'

interface Flag
{
	_id: string
	name: string
	color: string
}

interface FlagsProps
{
	flags: Flag[]
}

const Flags: React.FC<FlagsProps> = ({flags: staticFlags}) =>
{
	const [search, setSearch] = useState('')
	const {data, error, revalidate} = useSWR('/api/getFlags')
	const [flags, setFlags] = useState<Flag[]>(staticFlags)

	useEffect(() =>
	{
		if (data)
			setFlags(data)
		else if (error)
		{
			setFlags(staticFlags)
			console.error(error)
		}
	}, [data, error])

	useEffect(() => console.log('[flags]', flags), [flags])

	return (
		<Container className='page'>
			<Head>
				<title>Flags | STEM Guy</title>
			</Head>

			<Header display='Flags' search={search} setSearch={setSearch} />

			<h1>Flags</h1>
		</Container>
	)
}

export const getStaticProps: GetStaticProps = async ctx =>
{
	const {data: flags} = await api.get('flags')

	return {
		props: {flags},
		revalidate: 1
	}
}

export default Flags