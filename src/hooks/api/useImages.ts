import {useEffect, useState} from 'react'

import api from '../../services/api'
import {defaultPaginate, Paginate} from '../../models'
import Image from '../../models/image'

const useImages = (search: string) =>
{
	const [images, setImages] = useState<Image[]>([])
	const [paginate, setPaginate] = useState<Paginate>(defaultPaginate)
	const [loading, setLoading] = useState(true)

	useEffect(() =>
	{
		updateImages()
	}, [search])

	async function updateImages()
	{
		setLoading(true)
		
		const {data, headers} = await api.get('images', {params: {search, page: paginate.page}})

		let tmpImages: Image[] = data || []
		const tmpPaginate =
		{
			page: Number(headers.page) || 1,
			total: Number(headers.totalpages) || 1
		}

		setImages(tmpImages)
		setPaginate(tmpPaginate)

		setLoading(false)
	}

	function updatePaginate(newPaginate: Paginate)
	{
		setPaginate(newPaginate)
		updateImages()
	}

	return {images, loading, paginate, setPaginate: updatePaginate}
}

export default useImages