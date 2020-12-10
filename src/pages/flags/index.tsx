import { GetStaticProps } from 'next'
import Head from 'next/head'
import {useEffect, useState} from 'react'
import useSWR from 'swr'
import {useRouter} from 'next/router'

import Header from '../../components/Header'
import api from '../../services/api'
import Container from '../../styles/pages/flags/index'
import Add from '../../components/Add'
import {Flag} from '../../components/forms/Flag'

interface FlagsProps
{
	flags: Flag[]
}

const Flags: React.FC<FlagsProps> = ({flags: staticFlags}) =>
{
	const Router = useRouter()

	const [search, setSearch] = useState('')
	const {data, error} = useSWR('/api/getFlags')
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

	return (
		<Container className='page'>
			<Head>
				<title>Flags | STEM Guy</title>
			</Head>

			<Header display='Flags' search={search} setSearch={setSearch} />

			<Add />

			<main>
				{flags.map(flag => (
					<div
						style={{backgroundColor: `#${flag.color}`}}
						className='flag'
						key={flag._id}
						onClick={() => Router.push(`flags/${flag._id}`)}
					>
						<h1>{flag.name}</h1>
					</div>
				))}
			</main>
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