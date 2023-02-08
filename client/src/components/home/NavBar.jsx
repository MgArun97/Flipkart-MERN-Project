


import { Box, styled, Typography } from '@mui/material';
import { navData } from '../../constants/data';


const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px !important',
    overflowX: 'overlay',

    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}));

const Container = styled(Box)`
padding:12px 8px;
text-align:center;
`
const Text = styled(Typography)`
font-size:20px;
`


const NavBar = () => {
    return (
        <Box style={{ background: '#fff', }}>
            <Component>
                {
                    navData.map((data) => (
                        <Container>
                            <img src={data.url} alt="nav" style={{ width: 90 }} />
                            <Text>{data.text}</Text>
                        </Container>
                    ))
                }
            </Component>
        </Box>
    )
}

export default NavBar;