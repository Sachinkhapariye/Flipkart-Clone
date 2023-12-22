import { Badge, Box, Button, Typography, styled } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login from "../login/Login";
import { useState,useContext } from "react";
import { DataContext } from "../../context/dataProvider";
import Profile from "./Profile";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";


const Wrapper = styled(Box)(({theme}) => ({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    right:'0%',
    [theme.breakpoints.down('md')]:{
      display:'block'
  }
}))
const Container = styled(Link)(({theme}) => ({
  display:'flex',
  textDecoration:'none',
  color:'inherit',
  [theme.breakpoints.down('md')]:{
      display:'block'
  }
}))

const CustomButton = () => {

  const [open,setOpen] = useState(false);

  const {account , setAccount} = useContext(DataContext);

  const {cartItems} = useSelector(state => state.cart );

  const openLogin = () => {
    setOpen(true);
  }

  return (
    <Wrapper style={{marginLeft:30}} >

      {
          account ? <Profile account={account} setAccount={setAccount} /> :
          <Button variant="contained" style={{marginRight:40,backgroundColor:"white" ,color:"#2874F0",padding:"3px 40px",borderRadius:0,textTransform:"none",boxShadow:"none"}} onClick={()=>openLogin()} >Login</Button>

      }

      <Typography style={{marginRight:40}}>Become a Seller</Typography>
      <Typography style={{marginRight:40}}>More</Typography>
      <Container to='/cart'>
        <Badge badgeContent={cartItems?.length} color="secondary" >
        <ShoppingCartIcon/>
        </Badge>
        <Typography>Cart</Typography>
      </Container>
      <Login open={open} setOpen={setOpen} />
    </Wrapper>
  )
}

export default CustomButton
