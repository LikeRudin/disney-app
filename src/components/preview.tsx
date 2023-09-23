import {useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";



const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: cener;
  height: 30vh;
`;

const Image = styled.img`
  src: ${props => props.src};
  width: 50%;
  height: auto;
`

const Span = styled.span``

interface PreviewProps {
  id: number;
  name: string;
  imageUrl: string;
}


export const Preview = ({id, name, imageUrl}: PreviewProps) => {

  const [isNoError, setIsNoError] = useState(true);
  
  const handleImageError = () => {
    console.log('error');
    setIsNoError(false);
  };

  return (
    <>
    {isNoError? (
      <Container to={`/character/${id}`} onError={handleImageError}>
        <img src={imageUrl} onError={handleImageError}/>
        <Span>{name}</Span>
      </Container>
    ): null
    }
    </>
  );
};
