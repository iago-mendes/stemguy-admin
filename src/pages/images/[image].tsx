import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

import Container from '../../styles/pages/images/[image]'
import ImageForm, {ImageCRUD as Image} from '../../components/forms/Image'
import api from '../../services/api'
import Delete from '../../components/Delete'

const EditImage: React.FC = () =>
{
	const Router = useRouter()
	const {image: imageId} = Router.query

	const [image, setImage] = useState<Image>({id: '', url: '', alt: '', credit: '', creditLink: ''})

	useEffect(() =>
	{
		api.get('images').then(({data}:{data: Image[]}) =>
		{
			const tmp = data.find(image => image.id == imageId)
			if (tmp)
				setImage(tmp)
		})
	}, [imageId])

	return (
		<Container className='page'>
			<Delete collection='images' id={image.id} />
			<main>
				<ImageForm method='put' image={image} />
			</main>
		</Container>
	)
}

export default EditImage