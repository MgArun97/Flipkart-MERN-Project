
import { Grid, styled } from '@mui/material';
import { imageURL } from '../../constants/data';

const Image = styled('img')`
    width:100%;
    height:280;
`
const Wrapper = styled(Grid)`
    margin-top:10px;
`

const MidSection = () => {
    return (
        < Wrapper lg={12} sm={12} md={12} xs={12} container >
            {
                imageURL.map((data) => (
                    <Grid item lg={4} sm={4} md={12} xs={12}>
                        <Image src={data} alt="img" />
                    </Grid>

                ))
            }
        </ Wrapper>
    )
}


export default MidSection;