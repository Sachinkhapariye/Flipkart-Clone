import {Box, Typography, styled} from "@mui/material"
import { navBarData } from "../../constants/data" 


const Component = styled(Box)(({theme})=> ({
    display:'flex',
    margin:'70px 20px 0 20px',
    justifyContent:'space-between',
    overflow:'hidden',
    [theme.breakpoints.down('lg')]:{
        margin:0
    }
}));
const Container = styled(Box)`
    padding:12px 20px;
    text-align:center;

`;
const Text = styled(Typography)`
    font-size:12px;
    font-weight:500;
    align-items:center;
    justify-content:center;
    display:flex;
`;

const Navbar = () => {
  return (
    <Box style= {{background:'#fff'}} >
    <Component>
        {
            navBarData.map(data => (
                <Container>
                    <img src={data.url} alt="" />
                    <Text>{data.text}</Text>
                </Container>
            ))
        }
    </Component>
    </Box>
  )
}

export default Navbar
