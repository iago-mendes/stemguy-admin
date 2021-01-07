import {BsCaretLeft, BsCaretRight} from 'react-icons/bs'

import Container from '../styles/components/PaginateFooter'

interface PaginateFooterProps
{
	page: number
	setPage: Function

	totalPages: number
}

const PaginateFooter: React.FC<PaginateFooterProps> = ({page, setPage, totalPages}) =>
{
	function goBack()
	{
		if (page > 1)
			setPage(page - 1)
	}

	function goNext()
	{
		if (page < totalPages)
			setPage(page + 1)
	}

	return (
		<Container>
			<button onClick={goBack} >
				<BsCaretLeft size={25} />
			</button>
			<div className='controller'>
				<input
					type='number'
					value={page}
					onChange={e => setPage(e.target.value)}
					min={1}
					max={totalPages}
				/>
				<span>/ {totalPages}</span>
			</div>
			<button onClick={goNext} >
				<BsCaretRight size={25} />
			</button>
		</Container>
	)
}

export default PaginateFooter