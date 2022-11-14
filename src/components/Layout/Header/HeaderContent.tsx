import { Box, Typography, Button } from '@mui/joy'
import { useNavigate } from "react-router-dom"
import Logo from '../../../assets/logo.png'

const HeaderContent = (props: any) => {
	const navigate = useNavigate()

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					gap: 1.5,
				}}
			>
				<Box onClick={() => navigate("/", { replace: true })} component='img' src={Logo} sx={{ width: 60, cursor: 'pointer' }} />
				<Typography component="h1" fontWeight="xl">
					DevBase
				</Typography>
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5 }}>
				{props.showBackButton && <Button onClick={() => navigate("/")} size='md' variant='solid'>Back</Button>}
			</Box>
		</>
	)
}

export default HeaderContent