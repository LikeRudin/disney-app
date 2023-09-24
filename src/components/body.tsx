import {Preview} from './preview'
import styled from 'styled-components'

interface PreviewInfo {
  id: number;
  name: string;
  imageUrl: string;
}

interface BodyProps {
  showingList: PreviewInfo[]
}

const Ul = styled.ul`
display:flex;
justfy-contents: space-around;
width: 100%;
flex-wrap: wrap;
`;

const Li = styled.li`
width: 22%;
padding: 10px;
box-sizing: border-boxl
`;

export const Body = ({showingList}:BodyProps) => {
  return(<>
  <Ul>
  {showingList
    .map(({id, name, imageUrl}) => 
      <Li key={id}>
        <Preview id={id} name={name} imageUrl={imageUrl} />
      </Li>
  )}
  </Ul>
  </>)
}
