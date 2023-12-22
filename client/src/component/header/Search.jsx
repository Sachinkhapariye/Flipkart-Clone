import { Box, InputBase,List,ListItem, styled } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useSelector,useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
    background:white;
    width:35%;
    margin-left:240px;
    border-radius:5px;
    display:flex;
    align-items:center;
    justiy-content:center;
`;
const InputSearchBase = styled(InputBase)`
    width:100%;
    padding-left:10px;
`;
const ListWrapper = styled(List)`
  position:absolute;
  background:#FFFFFF;
  color:#000;
  margin-top:20%;
`

const Search = () => {

  const [text,setText] = useState('');

  const {products} = useSelector(state => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getProducts())
  },[dispatch]);

  const getText = (text) => {
      setText(text);
  }

  return (
    <SearchContainer>
        <SearchIcon style={{paddingLeft:10,color:"#2874F0"}}/>
        <InputSearchBase placeholder="Search for  Products, Brands and More"  
          onChange={(e) => getText(e.target.value)}
          value={text}
        />
        {
          text && 
              <ListWrapper>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link
                        to={`/product/${product.id}`}
                        onClick={()=>setText('')}
                        style={{textDecoration:'none',color:'inherit'}}
                      >
                          {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }
              </ListWrapper>
        }
    </SearchContainer>
  )
}

export default Search
