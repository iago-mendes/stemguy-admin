import {ChangeEvent} from 'react'
import {BsChevronBarLeft, BsChevronLeft, BsChevronRight, BsChevronBarRight} from 'react-icons/bs'

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

	function handlePageChange(e: ChangeEvent<HTMLInputElement>)
	{
		const tmpPage = Number(e.target.value)

		if (tmpPage >= 1 && tmpPage <= totalPages)
			setPage(tmpPage)
	}

	return (
		<Container>
			<div className='buttons'>
				<button onClick={() => setPage(1)}>
					<BsChevronBarLeft size={30} />
				</button>
				<button onClick={goBack}>
					<BsChevronLeft size={30} />
				</button>
			</div>
			<div className='controller'>
				<input
					type='number'
					value={page}
					onChange={handlePageChange}
					min={1}
					max={totalPages}
				/>
				<span> / {totalPages}</span>
			</div>
			<div className='buttons'>
				<button onClick={goNext}>
					<BsChevronRight size={30} />
				</button>
				<button>
					<BsChevronBarRight size={30} onClick={() => setPage(totalPages)}/>
				</button>
			</div>
		</Container>
	)
}

export default PaginateFooter