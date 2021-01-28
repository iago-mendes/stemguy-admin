import Head from 'next/head'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

import MemberForm from '../../components/forms/Member'
import Member, {defaultMember} from '../../models/member'
import api from '../../services/api'
import Delete from '../../components/Delete'

const AddMember: React.FC = () =>
{
	const {query} = useRouter()
	const {member: memberId} = query

	const [member, setMember] = useState<Member>(defaultMember)

	useEffect(() =>
	{
		api.get(`members/${memberId}`).then(({data}:{data: Member}) => setMember(data))
	}, [memberId])

	return (
		<div className='page form'>
			<Head>
				<title>Edit member | STEM Guy</title>
			</Head>

			<Delete collection='members' id={member.id} />

			<main>
				<MemberForm
					method='put'
					member={member}
				/>
			</main>
		</div>
	)
}

export default AddMember