import styled from 'styled-components'

const Button = styled.button`
`;


interface RandomButtonProps {
    onRandomClick?: () => void;
}

export const RandomButton = ({onRandomClick}: RandomButtonProps) => {
      return (
      <>
        
        <Button onClick={onRandomClick} disabled={true}>
            Show Radom Character
        </Button>
      
      </>
      )
}
