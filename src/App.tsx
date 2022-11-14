import { Suspense } from "react"
import { useRoutes } from "react-router-dom"
import routes from "./routes"
//--css provider
import { CssVarsProvider } from '@mui/joy/styles'
import { Typography } from '@mui/joy'

const App = () => {
	const renderRoutes = useRoutes(routes)

	return (
		<CssVarsProvider>
			<Suspense fallback={<Typography>Loading...</Typography>}>
				{renderRoutes}
			</Suspense>
		</CssVarsProvider>
	)

}

export default App