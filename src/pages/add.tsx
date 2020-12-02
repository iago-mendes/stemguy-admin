import Container from '../styles/pages/add'
import PostForm from '../components/forms/Post'

const AddPost: React.FC = () =>
{
	return (
		<Container>
			<PostForm method='post' />
		</Container>
	)
}

export default AddPost