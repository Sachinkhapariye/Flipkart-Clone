import {AppBar,Box,Toolbar,Typography,IconButton, Drawer,List,ListItem,styled} from "@mui/material";
import Search from "./Search";
import CustomButton from "./CustomButton";
import {Link} from 'react-router-dom';
import {Menu} from '@mui/icons-material';
import { useState } from "react";


const StyledHeader = styled(AppBar)`
    background:#2874F0;
    height:60px;
    
`;
const Component = styled(Link)`
    line-height:0;
    left:13%;
    position:absolute;
    text-decoration:none;
    color:inherit;
`;
const SubHeading = styled(Typography)`
    font-size:10px;
    font-weight:400;
    
    color:white;
    font-style:italic;
`;
const CustomButtomWrapper = styled(Box)(({theme}) => ({
    margin:'0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}))

const MenuButton = styled(IconButton)(({theme}) => ({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))


const Header = () => {

    const[open,setOpen] = useState(false);


    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const list = () => (
        <Box  style={{width:200}} onClick={handleClose}  >
            <List>
                <ListItem button > 
                    <CustomButton/>
                </ListItem>
            </List>
        </Box>
    )
    

  return (
    <StyledHeader>
        <Toolbar>
        <MenuButton color="inherit" onClick={handleOpen} >
            <Menu/>
        </MenuButton>

        <Drawer open={open} onClose={handleClose}>
            {list()}
        </Drawer>

            <Component to='/' >
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="logo" style={{width:75,}}/>
                <Box>
                    <SubHeading>Explore&nbsp; <Box component="span" style={{color:"#FFE500"}} >Plus&nbsp; <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg" alt="" /></Box></SubHeading>
                </Box>
            </Component>
            <Search/>
            <CustomButtomWrapper>
                <CustomButton/>
            </CustomButtomWrapper>
        </Toolbar>
    </StyledHeader>
  )
}

export default Header
