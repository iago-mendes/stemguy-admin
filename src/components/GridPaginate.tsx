import {ChangeEvent} from 'react'
import {BsChevronBarLeft, BsChevronLeft, BsChevronRight, BsChevronBarRight} from 'react-icons/bs'

import Container from '../styles/components/GridPaginate'
import Loading from './Loading'
import {Paginate} from '../models'

interface GridPaginateProps
{
	cardWidth: number
	cardHeight: number

	paginate: Paginate
	setPaginate: (p: Paginate) => void

	loading: boolean
	noResults: boolean
}

const GridPaginate: React.FC<GridPaginateProps> =
({cardWidth, cardHeight, paginate, setPaginate, loading, noResults, children}) =>
{
	const page = paginate.page
	const totalPages = paginate.total

	function setPage(page: number)
	{
		let tmpPaginate = paginate
		tmpPaginate.page = page
		setPaginate(tmpPaginate)
	}

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
		<Container
			cardWidth={cardWidth}
			cardHeight={cardHeight}
		>
			{
				loading
				? <Loading style={{marginTop: '10rem'}} />
				: (
					noResults
					? (
						<div className='noResults'>
							<h1>No results found!</h1>
						</div>
					)
					: (
						<main>
							{children}
						</main>
					)
				)
			}

			<div className='paginate'>
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
			</div>
		</Container>
	)
}

export default GridPaginate