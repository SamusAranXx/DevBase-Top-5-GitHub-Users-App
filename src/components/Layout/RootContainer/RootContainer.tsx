import { Box } from '@mui/joy'

const RootContainer = (props: any) => (
	<Box
		{...props}
		sx={[
			{
				bgcolor: 'background.appBody',
				display: 'grid',
				gridTemplateColumns: {
					xs: '1fr'
				},
				gridTemplateRows: '64px 1fr',
				minHeight: '100vh'
			},
			...(Array.isArray(props.sx) ? props.sx : [props.sx])
		]}
	/>
)

export default RootContainer