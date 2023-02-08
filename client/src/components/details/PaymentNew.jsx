
import { Box, styled } from '@mui/material';

const Component = styled(Box)`
    margin-left:500px; 
    padding-left:300px;
  

`


const PaymentNew = () => {
    const payImage = ' https://i.stack.imgur.com/Axsk1.jpg';
    return (
        <Component>
            <img src={payImage} alt='paytmImage' />
        </Component>
    )
}

export default PaymentNew;