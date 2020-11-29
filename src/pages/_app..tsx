import {AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components'
import {Provider} from 'next-auth/client'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) =>
{
  return (
		<Provider session={pageProps.session}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
				<GlobalStyle />
			</ThemeProvider>
		</Provider>
  )
}

export default MyApp