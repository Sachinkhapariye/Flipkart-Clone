import { Typography ,Box,Table,TableBody,TableRow,TableCell, styled} from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';

const SmallText = styled(Box)`
    font-size:14px;
    vertical-align:baseline;
    & > p {
        font-size:14px;
        margin-top:10px;
    }
`
const SBadge = styled(Badge)`
    margin-right:10px;
    color:#00CC00;
    font-size:15px;
`
const ColumnText = styled(TableRow)`
    font-size:14px;
    vertical-align:baseline;
    & > td {
        font-size:14px;
        margin-top:10px;
        border:none;
    }
`

const ProductDetail = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))

    return(
        
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop:5,color:'#878787  ',fontSize:14}}>
                     5 Rating & 1 Reviews
                <Box component='span'><img src={fassured} style={{width:77,marginLeft:20}} /></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{fontSize:28}} >रु{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#878787'}} > <strike>रु{product.price.mrp}</strike> </Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#388E3C'}} >{product.price.discount}</Box>&nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography>Avilable Offers</Typography>
            <SmallText>
                <Typography><SBadge/> 10% off on HDFC Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and aboveT&C</Typography>
                <Typography><SBadge/> 10% Instant Discount on PNB Credit Cards, up to ₹1500, on orders of ₹5,000 and aboveT&C</Typography>
                <Typography><SBadge/> 10% off on Bank of Baroda Credit Card Txns, up to ₹1,500 on orders of ₹5,000 and aboveT&C</Typography>
                <Typography><SBadge/> Get extra 38% off (price inclusive of cashback/coupon)T&C</Typography>
                <Typography><SBadge/> Buy this product and Get Extra ₹100 Off on Select Room HeatersT&C</Typography>
                <Typography><SBadge/> EMI starting from ₹176/monthView Plans</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}} >Delivery</TableCell>
                        <TableCell style={{fontWeight:600}}  >Delivery by {date.toDateString()} | रु40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}} >Warranty</TableCell>
                        <TableCell style={{fontWeight:600}}  >1 Year</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}} >Seller</TableCell>
                        <TableCell>
                            <Box component='span' style={{color:'#2874f0'}} >SuperComNet</Box>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2} >
                            <img src= {adURL} alt="Flipkart point" style={{width:390}} />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}} >Description</TableCell>
                        <TableCell style={{fontWeight:500}}  >{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}
export default ProductDetail;