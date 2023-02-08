import { Typography, Box, styled, Button } from "@mui/material";
import { addEllipsis } from "../../utils/common-utils";
import GroupedButton from "./ButtonGroup";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartAction";

const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    border-radius: 0px;
    display: flex;
    background:#fff;

`;
const LeftComponent = styled(Box)`
    margin: 20px; 
    display: flex;
    flex-direction: column;
`;
const SmallText = styled(Typography)`
color: #878787;
font-size: 16px;
margin-top: 10px;
`;

const Remove = styled(Button)`
    margin-top: 2px;
    font-size: 16px;
    color:#000;
    font-weight:600;
`;


const CartItem = ({ item }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    }
    return (
        <Component>
            <LeftComponent>
                <img src={item.url} alt='product' style={{ height: 120, width: 120 }} />
                <GroupedButton />
            </LeftComponent>
            <Box style={{ margin: 20 }}>
                <Typography style={{ margin: '20px 0', fontSize: 20 }}>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                    <Box component="span"><img src={fassured} alt='flipkart' style={{ width: 70, marginLeft: 10 }} /></Box>
                </SmallText>
                <Typography style={{ margin: '20px 0' }}>
                    <Box component='span' style={{ fontSize: 25, fontWeight: 600 }}> ₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{ color: 'lightslategray', fontSize: 20 }}> ₹<strike>{item.price.mrp}</strike></Box>
                    <Box component='span' style={{ color: 'lightgreen' }}>{item.price.discount}</Box>
                </Typography>
                < Remove onClick={() => removeItemFromCart(item.id)}>Remove</ Remove >
            </Box>
        </Component>
    )
}


export default CartItem;
