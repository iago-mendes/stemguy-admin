import {IoNewspaperOutline} from 'react-icons/io5'
import {BsImages, BsPeople} from 'react-icons/bs'
import {AiOutlineTags} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'

import Container from '../styles/components/Header'

interface HeaderProps
{
	display: string
	search: string
	setSearch: Function
}

const Header: React.FC<HeaderProps> = ({display, search, setSearch}) =>
{
	function getIcon(page: string)
	{
		if (page === 'Posts')
			return <IoNewspaperOutline size={50} />
		else if (page === 'Images')
			return <BsImages size={50} />
		else if (page === 'Flags')
			return <AiOutlineTags size={50}/>
		else if (page === 'Authors')
			return <BsPeople size={50} />
	}

	return (
		<Container>
			<div className="group">
				{getIcon(display)}
				<h1>{display}</h1>
			</div>
			<div className="inputField">
				<BiSearch size={25} color='rgb(138, 138, 138)' />
				<input type="text" name="search" value={search} onChange={e => setSearch(e.target.value)} />
			</div>
		</Container>
	)
}

export default Header