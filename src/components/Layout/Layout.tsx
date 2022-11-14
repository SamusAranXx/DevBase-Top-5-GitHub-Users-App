import { useEffect, useState } from "react"
import { Outlet, useLocation } from 'react-router-dom'
//-----custom components
import RootContainer from './RootContainer'
import { Header, HeaderContent } from './Header'
import Main from './Main'

const Layout = () => {
	const [showBackButton, setShowBackButton] = useState<boolean>(false)
	const { pathname } = useLocation()

	useEffect(() => {
		setShowBackButton(pathname !== '/' ? true : false)
	}, [pathname])

	return (
		<RootContainer>
			<Header>
				<HeaderContent showBackButton={showBackButton} />
			</Header>
			<Main>
				<Outlet />
			</Main>
		</RootContainer>
	)
}

export default Layout