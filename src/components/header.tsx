import styled from "styled-components";
import { ResetButton } from "./resetbutton";
import { HomeButton } from "./homebutton";
import { RandomButton } from "./randombutton";

const Nav = styled.div`
align-self: center;
top: 0;
height: 30%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;`;


interface HeaderProps {
  onResetClick?: () => void;
  onRandomClick?: () => void;
}


export const Header = ({ onResetClick, onRandomClick}: HeaderProps) => {
  return (
    <Nav>
      <HomeButton />
      {onResetClick ? (
        <ResetButton onResetClick={onResetClick} />) : 
       (
       <RandomButton onRandomClick={onRandomClick}/>
       )}
    </Nav>
  );
};
