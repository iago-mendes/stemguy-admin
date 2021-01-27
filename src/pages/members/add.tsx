import Head from 'next/head'
import MemberForm from '../../components/forms/Member'
import Header from '../../components/Header'

const AddMember: React.FC = () =>
{
	return (
		<div className='page form'>
			<Head>
				<title>Add member | STEM Guy</title>
			</Head>

			<MemberForm
				method='post'
			/>
		</div>
	)
}

export default AddMember