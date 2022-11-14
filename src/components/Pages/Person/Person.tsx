import { useEffect, useState } from 'react'
import { Typography, Box, Sheet, Avatar } from '@mui/joy'
import { useParams } from 'react-router-dom'
import { IUser } from '../../../interfaces/interfaces'

const Person = () => {
	const [userInfo, setUserInfo] = useState<IUser | any>({})
	const { username } = useParams()

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(`https://api.github.com/users/${username}`)
				const data = await response.json()
				setUserInfo(data)
			} catch (error) {
				console.log(error)
			}

		}
		if (username)
			fetchData()
	}, [username])

	return (
		<Sheet variant="outlined"
			sx={{
				borderRadius: 'sm',
				p: 2,
				mb: 2
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					flexWrap: 'wrap',
					gap: 2,
				}}
			>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Avatar src={userInfo.avatar_url} sx={{ borderRadius: 'sm', width: 100, height: 100 }} />
					<Box sx={{ ml: 2 }}>
						<Typography level="h4" mb={0.5} sx={{ fontWeight: 'bold' }}>
							{userInfo.name}
						</Typography>
						<Typography level="body2" textColor="text.tertiary">
							{userInfo.location}
						</Typography>
					</Box>
				</Box>
			</Box>
		</Sheet>
	)
}

export default Person