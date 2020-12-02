import Head from 'next/head'
import {useSession, signIn, signOut} from 'next-auth/client'

import Container from '../styles/pages/index'
import Loading from '../components/Loading'

const Home: React.FC = () =>
{
	const [session, loading] = useSession()

	if (loading) return <Loading />

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