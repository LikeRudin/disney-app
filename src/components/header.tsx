import styled from "styled-components";
import { ResetButton } from "./resetbutton"
import { HomeButton } from "./homebutton";

const Nav = styled.nav`
`

interface HeaderProps {
    onResetClick: () => void
}

export const Header = ({onResetClick}: HeaderProps) => {

    return (
    <Nav>
        <HomeButton/>
        <ResetButton onResetClick={onResetClick}/>    
    </Nav>
    )
    
}