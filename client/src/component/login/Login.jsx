import {Box, Button, Dialog, TextField, Typography, styled} from '@mui/material';
import { useState ,useContext} from 'react';
import { authenticateSignup ,authenticateLogin} from '../../service/api';
import { DataContext } from '../../context/dataProvider';

const Container = styled(Box)`
    width:90vh;
    height:80vh;
    display:flex;
`
const Image = styled(Box)`
    background:#2874F0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width:28%;
    height:100%;
    padding:0px 35px;
    & > p,&>h5{
        color:#FFFF;
        font-weight:600;
    }
`
const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding 25px 35px;
    width:10px;
    padding-left:30px;
    flex:1;
    & > div, & > button  , & >p {
        margin-top:20px;
    }
`
const LoginButton = styled(Button)`
    text-transfrom:none;
    background:#FB641B;
    color:#FFF;
    height:48px;
    border-radius:2px;
`
const RequestOTP = styled(Button)`
    text-transform:none;
    background:#FFF;
    color:#2874f0;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);

`
const Text = styled(Typography)`
    font-size:12px;
    color:#878787;
    font-weight:500;
`
const Error = styled(Typography)`
    font-size:10px;
    color:#f6161;
    line-height:0;
    margin-top:10px;
    font-weight:600;
`
const CreateAccount = styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor:pointer;
`
const accountIntialValues = {
    login:{
        view:'login',
        heading:"Login",
        subHeading:"Get access to your Orders, Wishlist and Recommendations"
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subHeading:"Sign up with your mobile number to get started"
    }
}


const signupInitialValues = {
    firstname : '',
    lastname : '',
    username : '',
    email : '',
    password : '',
    phone : '',
}

const loginInitialValues = {
    username:'',
    password:''
}

const Login = ({open,setOpen}) => {
    const [account, toggleAccount] = useState(accountIntialValues.login); 
    const [signup,setSignup] = useState(signupInitialValues)
    const [login,setLogin] = useState(loginInitialValues);
    const [error,setError] = useState(false);
    
    const{setAccount} = useContext(DataContext);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountIntialValues.login)
        setError(false);
    }
    const toggleSignup = () =>{
        toggleAccount(accountIntialValues.signup)
    }
    const onInpuutChange = (e) => {
        console.log(e.target.value)
        setSignup({...signup, [e.target.name]: e.target.value})
        console.log(signup)
    }
    const signUpUser = async() => {
        let response = await authenticateSignup(signup);
        if(!response)return;
        handleClose();
        setAccount(signup.firstname);
    }
    const onValueChange = (e) => {
        setLogin({...login,[e.target.name]: e.target.value })
    }

    const loginUser = async() =>{
        let response = await authenticateLogin(login);
        console.log(response);
        if(response.status === 200){
            handleClose();
            setAccount(response.data.data.firstname);
        }else{
            setError(true);
        }
    }

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
        <Container>
            <Box style={{display:'flex',height:'100%'}}>
                <Image>
                    <Typography variant='h5' style={{marginTop:20}}>{account.heading}</Typography>
                    <Typography style={{marginTop:10}}>{account.subHeading}</Typography>
                </Image>
                {
                    account.view === 'login' ?
                    <Wrapper>
                        <TextField variant='standard' onChange={(e) => onValueChange(e)} name='username' label='Enter Username'/>
                        {error && <Error>Please enter a valid username or password</Error>}
                        <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password' label='Enter Password'/>
                        <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                        <LoginButton onClick={ ()=> loginUser() }>Login</LoginButton>
                        <Typography style={{textAlign:'center'}}>OR</Typography>
                        <RequestOTP>Request OTP</RequestOTP>
                        <CreateAccount onClick={()=> toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                    </Wrapper>
                :
                    <Wrapper>
                        <TextField variant='standard' onChange={(e) => onInpuutChange(e)} name='firstname' label='Enter FirstName'/>
                        <TextField variant='standard' onChange={(e) => onInpuutChange(e)} name='lastname'  label='Enter LastName'/>
                        <TextField variant='standard' onChange={(e) => onInpuutChange(e)} name='username'  label='Enter UserName'/>
                        <TextField variant='standard' onChange={(e) => onInpuutChange(e)} name='email'     label='Enter Email'/>
                        <TextField variant='standard' onChange={(e) => onInpuutChange(e)} name='password'  label='Enter Password'/>
                        <TextField variant='standard' onChange={(e) => onInpuutChange(e)} name='phone'     label='Enter Phone'/>
                        <LoginButton onClick={() =>signUpUser()} >Continue</LoginButton>
                    </Wrapper>
                }
            </Box>
        </Container>
    </Dialog>
  )
}

export default Login
