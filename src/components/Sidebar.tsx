import {useState} from 'react'
import {useRouter} from 'next/router'
import {BsFiles, BsImages, BsPeople} from 'react-icons/bs'
import {AiOutlineTags} from 'react-icons/ai'

import Container from '../styles/components/Sidebar'
import logo from '../assets/logo.svg'

const Sidebar: React.FC = () =>
{
	const Router = useRouter()
	const [isExpanded, setIsExpanded] = useState(false)

  return (
		<Container
			isExpanded={isExpanded}
			onMouseEnter={() => setIsExpanded(true)}
			onMouseLeave={() => setIsExpanded(false)}
		>
			<header>
				<img src={logo} alt="STEM Guy" />
			</header>
			
			<ul>
				<li>
					<BsFiles size={25} />
					{isExpanded && <span>Posts</span>}
				</li>
				<li>
					<BsImages size={25} />
					{isExpanded && <span>Images</span>}
				</li>
				<li>
					<BsPeople size={25} />
					{isExpanded && <span>Authors</span>}
				</li>
				<li>
					<AiOutlineTags size={25} />
					{isExpanded && <span>Flags</span>}
				</li>
			</ul>

			<footer>
			</footer>
    </Container>
  )
}

export default Sidebar