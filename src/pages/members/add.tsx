import MemberForm from '../../components/forms/Member'

const AddMember: React.FC = () =>
{
	return (
		<div className='page form'>
			<main>
				<MemberForm
					method='post'
				/>
			</main>
		</div>
	)
}

export default AddMember