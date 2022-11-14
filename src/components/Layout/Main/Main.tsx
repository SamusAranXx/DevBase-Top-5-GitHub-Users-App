import { Box } from "@mui/joy"

const Main = (props: any) => (
	<Box
		component="main"
		className="Main"
		{...props}
		sx={[{
			p: 3,
		}, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
	/>
)

export default Main