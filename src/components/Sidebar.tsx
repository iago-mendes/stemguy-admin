import {useState} from 'react'
import {useRouter} from 'next/router'

import Container from '../styles/components/Sidebar'
// import logo from '../assets/logo.svg'

const Sidebar: React.FC = () =>
{
	const Router = useRouter()
	const [isClicked, setIsClicked] = useState(false)

  return (
		<Container
			isClicked={isClicked}
			onClick={e => String(e.target).includes('HTMLNavElement') && setIsClicked(!isClicked)}
		>
			{/* <img src={logo} alt="STEM Guy" title="Home" onClick={() => Router.push('/')}/> */}
			<h1>Sidebar</h1>
    </Container>
  )
}

export default Sidebar