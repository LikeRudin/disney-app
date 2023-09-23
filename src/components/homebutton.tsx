import {Link} from "react-router-dom"
import styled from "styled-components"


const Button = styled(Link)`

`
const Image = styled.img`
width:50%;
height:auto;
`

export const HomeButton = () =>{

    return(
    <Button to='/'>
        <Image src="../../public/logo.png"/>
    </Button>
    )
}