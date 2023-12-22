import { Box, styled } from "@mui/material"
import Banner from "./Banner"
import Slide from './Slide'
import Navbar from "./Navbar"
import { useEffect } from "react"
import { getProducts } from "../../redux/actions/productActions"
import { useDispatch ,useSelector} from "react-redux"
import MidSlide from './MidSlide'
import MidSection from "./MidSection"

const Container = styled(Box)`
  padding:10px;
  background:#F2F2F2;
`

const Home = () => {

  const {products} = useSelector(state => state.getProducts)//object based structure and concept
  console.log(products)
  
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      <Navbar/>
      <Container>
        <Banner/>
        <MidSlide products={products} title = "Deals of the day" timer = {true}  />
        <MidSection/>
        <Slide products={products} title = "Discount for you" timer = {false}/>
        <Slide products={products} title = "Today Offer" timer = {false}/>
        <Slide products={products} title = "Choice for you" timer = {false}/>
        <Slide products={products} title = "Trending Offers" timer = {false}/>
      </Container>
      
    </>
  )
}

export default Home
