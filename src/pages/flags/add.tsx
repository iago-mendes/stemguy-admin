import Container from '../../styles/pages/flags/add'
import FlagForm from '../../components/forms/Flag'

const AddFlag: React.FC = () =>
{
	return (
		<Container className='page'>
			<main>
				<FlagForm method='post' />
			</main>
		</Container>
	)
}

export default AddFlag