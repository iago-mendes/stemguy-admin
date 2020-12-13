import Container from '../../styles/pages/images/add'
import ImageForm from '../../components/forms/Image'

const AddImage: React.FC = () =>
{
	return (
		<Container className='page'>
			<main>
				<ImageForm method='post' />
			</main>
		</Container>
	)
}

export default AddImage