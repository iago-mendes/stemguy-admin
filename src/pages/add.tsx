import Container from '../styles/pages/add'
import PostForm from '../components/forms/Post'

const AddPost: React.FC = () =>
{
	return (
		<Container className='page'>
			<div className="scrollableContent">
				<PostForm method='post' />
			</div>
		</Container>
	)
}

export default AddPost