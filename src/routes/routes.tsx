import Layout from "../components/Layout"
//--Pages
import Home from "../components/Pages/Home"
import Person from "../components/Pages/Person"

const routes = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				path: '/',
				element: <Home />
			},
			{
				index: true,
				path: '/person/:username',
				element: <Person />
			}
		]
	}
]

export default routes