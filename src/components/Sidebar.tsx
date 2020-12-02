import {useState} from 'react'
import Link from 'next/link'
import {signOut} from 'next-auth/client'

import {BsImages, BsPeople} from 'react-icons/bs'
import {AiOutlineTags} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {BiUserCircle} from 'react-icons/bi'
import {IoNewspaperOutline} from 'react-icons/io5'

import Container from '../styles/components/Sidebar'
import logo from '../assets/logo.svg'

const Sidebar: React.FC = () =>
{
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
			
			<main>
				<ul>
					<Link href='/'>
						<a>
							<IoNewspaperOutline size={25} />
							<span>Posts</span>
						</a>
					</Link>
					<Link href='/'>
						<a>
							<BsImages size={25} />
							<span>Images</span>
						</a>
					</Link>
					<Link href='/'>
						<a>
							<AiOutlineTags size={25} />
							<span>Flags</span>
						</a>
					</Link>
					<Link href='/'>
						<a>
							<BsPeople size={25} />
							<span>Authors</span>
						</a>
					</Link>
				</ul>
			</main>

			<footer>
				<ul>
					<Link href='/'>
						<a>
							<BiUserCircle size={25} />
							<span>User</span>
						</a>
					</Link>
					<li onClick={() => signOut()}>
						<FiLogOut size={25} />
						<span>Log out</span>
					</li>
				</ul>
			</footer>
    </Container>
  )
}

export default Sidebar