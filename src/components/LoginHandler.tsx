import {useSession, signIn} from "next-auth/client";
import Image from 'next/image'
import {CSSProperties} from 'styled-components'

import Loading from './Loading'
import Container from '../styles/components/LoginHandler'
import logo from '../assets/logo.svg'

const loadingStyles: CSSProperties =
{
	position: 'absolute',
	top: 0,
	left: 0
}

const LoginHandler: React.FC = ({children}) =>
{
	const [session, loading] = useSession()

	if (loading) return <Loading style={loadingStyles} />

	if (session) return (
		<>
			{children}
		</>
	)

	return (
		<Container>
			<div className="img">
				<Image src={logo} alt='STEM Guy' width={300} height={300} layout='responsive' />
			</div>
			<main>
				<h1>This is the admin website for the STEM Guy blog.</h1>
				<button onClick={() => signIn('auth0')}>Log in</button>
			</main>
		</Container>
	)
}

export default LoginHandler