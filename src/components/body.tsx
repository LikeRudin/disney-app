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

const Ul = styled.ul``

const Li = styled.li``

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