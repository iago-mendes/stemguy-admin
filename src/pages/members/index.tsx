import {GetStaticProps} from 'next'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import useSWR from 'swr'
import Image from 'next/image'

import Container from '../../styles/pages/members/index'
import api from '../../services/api'
import Loading from '../../components/Loading'
import Add from '../../components/Add'
import Header from '../../components/Header'
import { MemberListed } from '../../models/member'

interface MembersProps
{
	members: MemberListed[]
}

const Members: React.FC<MembersProps> = ({members: staticMembers}) =>
{
	const Router = useRouter()
	const {data, error} = useSWR(`/api/getMembers`)
	const [members, setPosts] = useState<MemberListed[]>(staticMembers)

	useEffect(() =>
	{
		if (data)
			setPosts(data)
		else if (error)
		{
			setPosts(staticMembers)
			console.error(error)
		}
	}, [data, error])

	if (!members)
		return <Loading />

	return (
		<Container className='page'>
			<Header display='Members' showSearch={false} />

			<Add />

			<main>
				{members.map(member => (
					<div
						className='member'
						key={member.id}
						onClick={() => Router.push(`/members/${member.id}`)}
					>
						<div className='img'>
							<Image
								src={member.image}
								alt={member.name}
								width={1000}
								height={1000}
								layout='responsive'
							/>
						</div>
						<h1>{member.name}</h1>
						<h2>{member.role}</h2>
					</div>
				))}
			</main>
		</Container>
	)
}

export const getStaticProps: GetStaticProps = async () =>
{
	const {data: members} = await api.get('members')

	return {
		props: {members},
		revalidate: 1
	}
}

export default Members