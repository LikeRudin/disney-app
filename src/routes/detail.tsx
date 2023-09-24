import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchDetail } from "../fetchers";
import { Header } from "../components/header";
import { Background } from "../components/styled/background";

const Container = styled.div`
  margin-left: 15%;
  display: flex;
  justfy-contents: center;
  align-items: center;
  padding: 15px;
  border-radius: 30px;
  height: 70vh;
  width: 70%;
  background-color: gray;
  position: relative;
  white-space: normal;
`;
const ProfileWrapper = styled.div`
  height: 80%;
  width: 50%;
  font-size: x-large;
`;
const Image = styled.img`
  height: 65%;
  width: 65%;
  border-radius: 10%;
  object-fit: corver;
  margin: 15px;
`;
const NameDiv = styled.div`
  height: 20%;
  padding: 25px;
  padding-left: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  white-space: normal;
`;
const Ul = styled.ul`
  position: absolute;
  top: 20px;
  right: 10px;
  width: 50%;
  height: 80%;
  overflow-y: auto;
  white-space: normal;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Li = styled.li`
  margin: 3px;
  font-size: normal;
  width: 100%;
  white-space: normal;
`;
const Span = styled.span`
  white-space: normal;
  margin: 5px;
  font-size: x-large;
`;

const A = styled.a`
  text-decoration-line: none;
  display: block;
  border-radius: 10%;
  &:hover {
    background-color: black;
    font-size: xx-large;
    color: white;
  }
`;

interface detailData {
  films: string[];
  id: number;
  imageUrl: string;
  name: string;
  sourceUrl: string;
}

export const Detail = () => {
  const { id } = useParams();

  const { isLoading: isDetailLoading, data: detailData } = useQuery<detailData>(
    ["detailData"],
    () => {
      return fetchDetail(Number(id));
    },
  );

  return (
    <>
      <Background />
      {isDetailLoading ? (
        <h1> Loading </h1>
      ) : (
        <>
          <Header />
          <Container>
            <ProfileWrapper>
              <Image src={detailData?.imageUrl} />
              <NameDiv>
                <Span>{detailData?.name}</Span>
                <A href={detailData?.sourceUrl} target="_blank">
                  Meet
                </A>
              </NameDiv>
            </ProfileWrapper>
            <Ul>
              <Span>Filmography</Span>
              {detailData?.films.map((title) => (
                <Li as="li" key={title}>
                  {title}
                </Li>
              ))}
            </Ul>
          </Container>
        </>
      )}
    </>
  );
};

