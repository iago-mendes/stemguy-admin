import Head from 'next/head'
import {useSession, signIn, signOut} from 'next-auth/client'

import Container from '../styles/pages/index'
import { useEffect } from 'react'

const Home: React.FC = () =>
{
	const [session, loading] = useSession()

	useEffect(() =>
	{
		console.log('[session]', session)
	}, [loading])

	if (loading) return <h1>Loading...</h1>

  return (
    <Container className='page'>
      <Head>
        <title>STEM Guy</title>
      </Head>

      <h1>Hello, world!</h1>

			{
				session
				? (
					<>
						<h1>You're logged!</h1>
						<button onClick={() => signOut()} >Log out</button>
					</>
				)
				: <button onClick={() => signIn('auth0')} >Login</button>
			}
    </Container>
  )
}

export default Home