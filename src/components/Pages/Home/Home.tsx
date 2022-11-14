import { Typography, Box, Sheet, Button, ListDivider } from '@mui/joy'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate()
	const usernames = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"]

	const goToPerson = (username: String) => {
		navigate(`/person/${username}`)
	}

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
					flexDirection: 'column',
					flexWrap: 'wrap',
					gap: 2,
				}}
			>
				<Typography level="h3" sx={{ fontWeight: 'bold' }}>
					Top 5 GitHub Users
				</Typography>
				<Typography level="body2">
					Tap the username to see more info.
				</Typography>
				<ListDivider component="hr" sx={{ mt: 2 }} />
				<Box sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: '100%',
						md: 'minmax(300px, 100%) minmax(300px, 100%) minmax(300px, 100%)'
					},
					gap: 3
				}}>
					{usernames.map(username => (
						<Button key={username} onClick={() => goToPerson(username)} variant="solid" color="primary" size="md">
							{username}
						</Button>
					))}
				</Box>
			</Box>
		</Sheet>
	)
}

export default Home