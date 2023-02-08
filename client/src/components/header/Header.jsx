import { useState } from 'react';



import { AppBar, Toolbar, Box, styled, Typography, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Menu } from '@mui/icons-material';
import CustomButtons from './CustomButtons';
import Search from './Search';
import { Link } from 'react-router-dom';
const StyledHeader = styled(AppBar)`
    background:#2874f0;
    height:80px;
`
const BoxComponent = styled(Link)`
margin-top:auto;
margin-left:12%;
line-height:0;
text-decoration:none;
color:inherit;
`
const SubHead = styled(Typography)`
font-size:14px;
font-style:italic;
`
const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

const Header = () => {
    const logoURl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <StyledHeader>
            <Toolbar >
                <MenuButton color='inherit' onClick={handleOpen} >
                    <Menu />
                </MenuButton>
                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <BoxComponent to='/' >
                    <img src={logoURl} alt="logo" style={{ width: 100 }} />
                    <Box>
                        <SubHead>Explore
                            <Box component="span" style={{ color: 'yellow' }}> Plus&nbsp;</Box>
                            <img src={subURL} alt="sublogo" style={{ width: 13 }} />
                        </SubHead>
                    </Box>
                </BoxComponent>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    );
}

export default Header;