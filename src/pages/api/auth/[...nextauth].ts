import {NextApiHandler} from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const config =
{
	secret: process.env.AUTH_SECRET,
	providers:
	[
		Providers.Auth0({
			clientId: process.env.AUTH0_CLIENT_ID,
			clientSecret: process.env.AUTH0_CLIENT_SECRET,
			domain: process.env.AUTH0_DOMAIN
		})
	],
	jwt:
	{
		secret: process.env.AUTH_SECRET
	}
}

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, config)
export default authHandler