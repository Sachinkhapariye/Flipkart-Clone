import { Button,ButtonGroup,styled } from "@mui/material"

const Component = styled(ButtonGroup)`
    margin-top:30px;
`
const StyledButton = styled(Button)`
    border-radius:50%;
`

const BtnGroup = () =>{
    return(
        <Component variant="outlined" aria-label="outlined button group">
            <StyledButton>-</StyledButton>
            <Button disabled>1</Button>
            <StyledButton>+</StyledButton>
        </Component>
    )
}

export default BtnGroup;