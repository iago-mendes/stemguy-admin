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

			<main>
				<MemberForm
					method='post'
				/>
			</main>
		</div>
	)
}

export default AddMember