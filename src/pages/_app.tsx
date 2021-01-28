import {AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components'
import {Provider} from 'next-auth/client'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Sidebar from '../components/Sidebar'
import LoginHandler from '../components/LoginHandler'
import SEOHead from '../components/SEOHead'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) =>
{
  return (
		<Provider session={pageProps.session}>
			<SEOHead />
			<ThemeProvider theme={theme}>
				<LoginHandler>
					<Sidebar />
					<Component {...pageProps} />
					<GlobalStyle />
				</LoginHandler>
			</ThemeProvider>
		</Provider>
  )
}

export default MyApp