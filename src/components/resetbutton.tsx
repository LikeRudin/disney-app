import styled from 'styled-components';


const Button = styled.button`
`

interface ResetButtonProps {
    onResetClick: () => void
}

export const ResetButton = ({onResetClick}: ResetButtonProps) => {
    return (
        <Button onClick={onResetClick}> Change! </Button>
    );
}