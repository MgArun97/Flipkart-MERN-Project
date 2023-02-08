import { useState, useEffect } from "react";

import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from 'react-router-dom';
const SearchContainer = styled(Box)`
background:white;
width:38%;
height:70%;
border-radius:2px;
margin-left:10px;
margin-top:auto;
display:flex;
`
const InputSearchBase = styled(InputBase)`
padding-top:5px;
padding-left:20px;
padding-bottom:auto;
width:100%;
font-size:20px;

`
const SearchIconWrapper = styled(Box)`
color:blue;
padding:5px;
dispaly:flex;
`
const ListWrapper = styled(List)`
position:absolute;
background:white;
color:black;
margin-top:40px;

`


const Search = () => {
    const [text, setText] = useState('');

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])



    const getText = (text) => {
        setText(text);
    }
    return (
        <SearchContainer>
            <InputSearchBase
                placeholder="search for products,brands and more"
                onChange={(e) => getText(e.target.value)}
                value={text}
            />
            <SearchIconWrapper> <SearchIcon fontSize="large" /> </SearchIconWrapper>
            {
                text &&
                <ListWrapper>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLocaleLowerCase())).map(product =>
                            <ListItem>
                                <Link
                                    to={`/product/${product.id}`}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                    onClick={() => setText('')}
                                >
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        )
                    }
                </ListWrapper>
            }


        </SearchContainer>

    )
}



export default Search;